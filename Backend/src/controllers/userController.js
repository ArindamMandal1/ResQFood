import User from "../models/User.js";
import axios from "axios";

// Update profile and optionally single avatar upload (req.file)
export const updateProfile = async(req, res) => {
    try {
    const userId = req.user._id;
    const { name, address, contactInfo } = req.body;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (name) {
        user.name = name;
    }
    if (contactInfo) {
        user.contactInfo = contactInfo;
    }

    if (contactInfo && !/^\d{10}$/.test(contactInfo)) {
        return res.status(400).json({ success: false, message: "Invalid contact number" });
    }

    if (address && address !== user.address) {
      user.address = address;
      // geocode via Mapbox
      const token = process.env.MAPBOX_ACCESS_TOKEN;
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}&limit=1`;
      try {
            const geoRes = await axios.get(url);
            const feat = geoRes.data.features?.[0];
            if (feat) {
              user.location = { type: "Point", coordinates: feat.geometry.coordinates };
            }
        } catch (err) {
            console.warn("Mapbox geocoding failed :", err.message);
        }
    }

    if (req.file) {
      // multer-storage-cloudinary sets path and filename
      user.avatar = { url : req.file.path, public_id : req.file.filename };
    }

    await user.save();
    res.json({ success : true, message : "Profile updated successfully", 
    user : {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    contactInfo: user.contactInfo,
    address: user.address,
    location: user.location,
    avatar: user.avatar,
  }, 
  });

  } catch (error) {
    res.status(500).json({ success : false, message : error.message });
  }
};