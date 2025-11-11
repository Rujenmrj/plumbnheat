export default function Form({ title = "Contact Us" }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full">
      <h3 className="text-2xl font-semibold text-secondary mb-6">{title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const subject = form.subject.value || "No Subject";
          const message = form.message.value;

          const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@weplumbnheat.co.uk&su=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

          window.open(mailtoLink, "_blank");
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          name="message"
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
