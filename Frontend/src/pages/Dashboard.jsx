// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";

/*
  Dashboard.jsx
  - Paste into src/pages/Dashboard.jsx (replace existing)
  - Uses Tailwind classes to match your site styling
  - Local-state demo: posts are stored only in memory (no backend)
*/

function Icon({ children }) {
  return <span className="mr-3 text-green-600">{children}</span>;
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
        status === "available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
      }`}
    >
      {status}
    </span>
  );
}

function PostCard({ post, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border">
      <div className="h-56 w-full overflow-hidden bg-gray-100">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{post.title}</h3>
            <div className="text-sm text-gray-500 capitalize">{post.by}</div>
          </div>

          <div className="ml-4">
            <StatusBadge status={post.status} />
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">{post.description}</p>

        <div className="mt-5 text-sm text-gray-600 space-y-3">
          <div className="flex items-center">
            <Icon>📦</Icon>
            <div>{post.quantity} • {post.category}</div>
          </div>

          <div className="flex items-center">
            <Icon>⏰</Icon>
            <div>Best before: {new Date(post.bestBefore).toLocaleString()}</div>
          </div>

          <div className="flex items-center">
            <Icon>📍</Icon>
            <div>{post.location}</div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onEdit(post)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-lg bg-white hover:shadow transition"
          >
            <span>✏️</span> Edit
          </button>

          <button
            onClick={() => onDelete(post.id)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [user, setUser] = useState(null);

  // demo posts state
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const emptyForm = {
    title: "",
    by: "",
    description: "",
    quantity: "1",
    category: "prepared-food",
    bestBefore: new Date(Date.now() + 24 * 3600 * 1000).toISOString().slice(0,16), // default tomorrow
    location: "",
    imageUrl: "/placeholder-food.jpg",
    status: "available",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("resq_user"));
      if (u) setUser(u);
    } catch {}
    // add a demo post to show layout (only if none exist)
    setPosts(prev => {
      if (prev.length) return prev;
      return [
        {
          id: Date.now(),
          title: "Fresh Baked Bread",
          by: "Sayan's Bakery",
          description: "Assorted fresh bread from today.",
          quantity: "20 loaves",
          category: "baked-goods",
          bestBefore: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
          location: "Garia",
          imageUrl: "https://www.foodandwine.com/thmb/Z2AE53BGYP2U-kXhtbVwXZQX8sc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Perfect-Sandwich-Bread-FT-RECIPE0723-dace53e15a304942acbc880b0ae34f5a.jpg",
          status: "available",
        },
      ];
    });
  }, []);

  function openCreate() {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function openEdit(post) {
    setEditing(post.id);
    setForm({
      title: post.title,
      by: post.by,
      description: post.description,
      quantity: post.quantity,
      category: post.category,
      bestBefore: (new Date(post.bestBefore)).toISOString().slice(0,16),
      location: post.location,
      imageUrl: post.imageUrl,
      status: post.status,
    });
    setShowForm(true);
  }

  function savePost(e) {
    e.preventDefault();
    const payload = {
      id: editing || Date.now(),
      title: form.title || "Untitled",
      by: form.by || (user?.name || "Unknown"),
      description: form.description,
      quantity: form.quantity,
      category: form.category,
      bestBefore: new Date(form.bestBefore).toISOString(),
      location: form.location,
      imageUrl: form.imageUrl || "/placeholder-food.jpg",
      status: form.status,
    };

    setPosts(prev => {
      if (editing) {
        return prev.map(p => (p.id === editing ? payload : p));
      } else {
        return [payload, ...prev];
      }
    });

    setShowForm(false);
    setEditing(null);
    setForm(emptyForm);
  }

  function deletePost(id) {
    if (!confirm("Delete this post?")) return;
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Food Posts</h1>
            <p className="text-gray-600 mt-1">Manage your surplus food listings</p>
          </div>

          <div>
            <button
              onClick={openCreate}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
            >
              <span className="text-xl">＋</span>
              <span>Create Post</span>
            </button>
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map(p => (
            <PostCard key={p.id} post={p} onEdit={openEdit} onDelete={deletePost} />
          ))}
        </div>
      </div>

      {/* Modal form (simple) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowForm(false)} />

          <form
            onSubmit={savePost}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 z-10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{editing ? "Edit Post" : "Create Post"}</h3>
              <button type="button" onClick={() => setShowForm(false)} className="text-gray-500">✕</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">By (restaurant/NGO)</label>
                <input value={form.by} onChange={e => setForm(f => ({ ...f, by: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2" rows={3} />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Quantity</label>
                <input value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2">
                  <option value="prepared-food">prepared-food</option>
                  <option value="baked-goods">baked-goods</option>
                  <option value="produce">produce</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Best before</label>
                <input type="datetime-local" value={form.bestBefore} onChange={e => setForm(f => ({ ...f, bestBefore: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Location</label>
                <input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Image URL</label>
                <input value={form.imageUrl} onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2" placeholder="https://..." />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className="mt-1 w-full border rounded px-3 py-2">
                  <option value="available">available</option>
                  <option value="claimed">claimed</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg border">Cancel</button>
              <button type="submit" className="px-6 py-2 rounded-lg bg-green-600 text-white">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
