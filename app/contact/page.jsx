"use client";

import React, { useState } from "react";
import { sendContactMessage } from "../service/home";
import { useThemeContext } from "../context/ThemeContext";

export default function ContactPage() {
  const { themeData, config } = useThemeContext();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await sendContactMessage(form);
      alert(res.message || "✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "40px 16px",
        color: themeData?.text?.primary,
      }}
    >
      <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        Contact Us
      </h1>

      <p style={{ marginBottom: "1.5rem", color: themeData?.text?.secondary }}>
        Have a question, suggestion, or business inquiry? Reach out to us and we’ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", fontWeight: "500", marginBottom: "6px", color: themeData?.text?.primary }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            style={{
              width: "100%",
              color: themeData?.background?.button,
              border: "1px solid #ccc",
              borderRadius: config?.borderRadius,
              padding: "10px",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: "500", marginBottom: "6px", color: themeData?.text?.primary }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              color: themeData?.background?.button,
              border: "1px solid #ccc",
              borderRadius: config?.borderRadius,
              padding: "10px",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: "500", marginBottom: "6px", color: themeData?.text?.primary }}>
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            style={{
              width: "100%",
              border: "1px solid #ccc",
              color: themeData?.background?.button,
              borderRadius: config?.borderRadius,
              padding: "10px",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: themeData?.background?.button,
            color: themeData?.text?.button,
            fontWeight: "600",
            padding: "10px 24px",
            border: "none",
            borderRadius: config?.borderRadius,
            cursor: "pointer",
            transition: "background 0.3s",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
