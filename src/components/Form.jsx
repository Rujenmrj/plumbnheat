// src/components/Form.jsx
import React from "react";

export default function Form({ title = "Contact Us", onSubmit }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full">
      <h3 className="text-2xl font-semibold text-secondary mb-6">{title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) onSubmit(e);
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
        />
        <button
          type="submit"
          className="bg-[var(--color-secondary-500)] text-white px-6 py-3 rounded-lg mt-2 hover:bg-[var(--color-secondary-400)] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
