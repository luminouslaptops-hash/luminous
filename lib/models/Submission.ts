import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    assignmentId: {
      type: String,
      required: true,
    },
    assignmentTitle: {
      type: String,
      required: true,
    },
    files: {
      type: Map,
      of: String,
      required: true,
    },
    score: {
      type: Number,
      default: null,
    },
    feedback: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['submitted', 'reviewed', 'graded'],
      default: 'submitted',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Submission ||
  mongoose.model('Submission', submissionSchema);
