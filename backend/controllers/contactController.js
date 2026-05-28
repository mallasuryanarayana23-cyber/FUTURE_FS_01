import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

// @desc    Submit contact form, save in DB, and send notification
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. Client input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: name, email, subject, message'
    });
  }

  // Regex check for email format
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  try {
    // 2. Save message in MongoDB
    let newContact = null;
    try {
      newContact = await Contact.create({
        name,
        email,
        subject,
        message
      });
      console.log(`Saved contact inquiry in database: ${newContact._id}`);
    } catch (dbError) {
      console.warn(`Database storage failed: ${dbError.message}. Continuing to attempt email dispatch.`);
    }

    // 3. Dispatch Email via Nodemailer
    let emailStatus = null;
    try {
      emailStatus = await sendEmail({
        name,
        email,
        subject,
        message
      });
    } catch (emailError) {
      console.error(`Email delivery failed: ${emailError.message}`);
    }

    // 4. Return success response
    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Thank you for reaching out.',
      data: newContact ? { id: newContact._id } : null,
      emailSent: emailStatus ? emailStatus.success : false
    });

  } catch (error) {
    console.error(`Server error during contact form submission: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Server error. We could not process your message at this time. Please try again later.'
    });
  }
};
