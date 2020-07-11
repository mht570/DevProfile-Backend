const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  profilePhoto: {
    type: Object,
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  address: {
    type: String,
  },
  Bio: {
    type: String,
  },
  skills: [
    {
      name: {
        type: String,
      },
    },
  ],
  projects: [
    {
      title: {
        type: String,
      },
      Orgnization: {
        type: String,
      },
      location: {
        type: String,
      },
      About: {
        type: String,
      },
      links: {
        type: String,
      },
    },
  ],
  Experience: [
    {
      Orgnization: {
        type: String,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
      },
      To: {
        type: Date,
      },
      About: {
        type: String,
      },
    },
  ],
  Education: [
    {
      School: {
        type: String,
      },
      Degree: {
        type: String,
      },
      FiledOfStudy: {
        type: String,
      },
      from: {
        type: Date,
      },
      To: {
        type: Date,
      },
      Score: {
        type: String,
      },
    },
  ],
  CodingProfile: [
    {
      Site: {
        type: String,
      },
      Link: {
        type: String,
      },
      data: {
        type: Object,
      },
    },
  ],
  SocialProfile: [
    {
      Site: {
        type: String,
      },
      Link: {
        type: String,
      },
      data: {
        type: Object,
      },
    },
  ],
});

module.exports = mongoose.model("Profile", UserSchema);
