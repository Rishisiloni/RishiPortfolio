/**
 * Controller to handle contact form submissions.
 */
export const handleContact = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required fields.",
      });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    // Log the contact message (in production, you can forward this to Nodemailer / Resend / DB)
    console.log(`[Contact Submission] From: ${name} (${email}) - Subject: ${subject || 'No Subject'}`);
    console.log(`[Message]: ${message}`);

    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! Your message has been received.",
      data: {
        name,
        email,
        subject: subject || "Portfolio Inquiry",
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({
      success: false,
      error: "An internal server error occurred while sending your message.",
    });
  }
};
