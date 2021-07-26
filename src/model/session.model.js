const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    valid: {
      type: Boolean,
      default: true
    },
    userAgent: {
      type: String
    }
  },
  { timestamps: true }
);

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
