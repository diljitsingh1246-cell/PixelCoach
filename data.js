// ═══════════════════════════════════════════════════════════
//  PIXEL COACH — data.js
//  All course data, modules, YouTube videos, and quiz banks
// ═══════════════════════════════════════════════════════════

const COURSES = {
  video: {
    id: "video",
    title: "Video Editing",
    icon: "fas fa-film",
    iconClass: "icon-video",
    glowClass: "glow-video",
    color: "#f97316",
    description: "Master cinematic editing, colour grading, transitions, and storytelling with DaVinci Resolve and Premiere Pro.",
    levels: {
      beginner: {
        label: "🟢 Beginner",
        modules: [
          // Example of updating a module to use a local file
          { id: "v1", title: "Basic Tools of Capcut", duration: "3.26 min", videoId: "wd8LSS7AhO4" },
          { id: "v2", title: "How to Split Clips and Add Music", duration: "1.29 min", videoId: "Mw87fXGz6cM" },
          { id: "v3", title: "How to add transitions", duration: "1.27 min", videoId: "ow5C3Y5ydHM" },
          { id: "v4", title: "How to Add Text & Titles", duration: "1.34 min", videoId: "pBUClNaXmfk" },
          { id: "v5", title: "How to use Transitions and Effects", duration: "1.27 min", videoId: "ow5C3Y5ydHM" }
        ]
      },
      intermediate: {
        label: "🟡 Intermediate",
        modules: [
          { id: "v6",  title: "Basic tools of Capcut", duration: "3.26 min", videoId: "wd8LSS7AhO4" },
          { id: "v7",  title: "Make this reel to check or Improve your Skill", duration: "0.25 min", videoId: "dTgwCg7CAd8" },
          { id: "v8",  title: "How to Split Clips and Add Music", duration: "1.29 min", videoId: "Mw87fXGz6cM" },
          { id: "v9",  title: "How to Add Text & Titles", duration: "1.34 min", videoId: "pBUClNaXmfk" },
          { id: "v10", title: "How to use Transitions and Effects", duration: "1.27 min", videoId: "ow5C3Y5ydHM" }
        ]
      },
      advanced: {
        label: "🔴 Advanced",
        modules: [
          { id: "v11", title: "How to use | Basics of Premiere Pro", duration: "2.15 min", videoId: "sJiFadt-zc8" },
          { id: "v12", title: "Make this Video to improve your skill - 1", duration: "0.21 min", videoId: "aciRc3J48R0" },
          { id: "v13", title: "Make this Video to improve your skill - 2", duration: "0.25 min", videoId: "dTgwCg7CAd8" },
        ]
      }
    },
    quiz: [
      {
        q: "What does 'colour grading' mean in video editing?",
        options: ["Adding credits to a video", "Adjusting the colour tone and mood of footage", "Cutting clips into smaller pieces", "Syncing audio to video"],
        correct: 1
      },
      {
        q: "Which keyboard shortcut is commonly used to cut/split a clip in Premiere Pro?",
        options: ["Ctrl + C", "Ctrl + X", "C (Razor Tool)", "Alt + Delete"],
        correct: 2
      },
      {
        q: "What is B-roll footage?",
        options: ["The main interview footage", "Supplemental cutaway shots", "Credits at the end", "Title cards"],
        correct: 1
      },
      {
        q: "What is a LUT in video editing?",
        options: ["A type of video codec", "A Look-Up Table for colour transformation", "A video format", "A transition effect"],
        correct: 1
      },
      {
        q: "Which frame rate is standard for cinematic film?",
        options: ["30 fps", "60 fps", "24 fps", "120 fps"],
        correct: 2
      }
    ]
  },

  photo: {
    id: "photo",
    title: "Photo Editing",
    icon: "fas fa-camera-retro",
    iconClass: "icon-photo",
    glowClass: "glow-photo",
    color: "#06b6d4",
    description: "Retouch portraits, build composites, and master colour science in Adobe Lightroom & Photoshop.",
    levels: {
      beginner: {
        label: "🟢 Beginner",
        modules: [
          { id: "p1", title: "How to edit Photo in PhotoShop", duration: "2.17 min", videoId: "QuXLQdTJ02M" },
          { id: "p2", title: "How to make instant passport photo", duration: "3.27 min", videoId: "FqzbROvTz_M" },
          { id: "p3", title: "White Balance & Tones", duration: "16 min", videoId: "AQpHLvzSATs" },
          { id: "p4", title: "Cropping & Lens Correction", duration: "12 min", videoId: "AQpHLvzSATs" },
          { id: "p5", title: "Exporting for Web & Print", duration: "10 min", videoId: "AQpHLvzSATs" }
        ]
      },
      intermediate: {
        label: "🟡 Intermediate",
        modules: [
           { id: "p6", title: "How to edit Photo in PhotoShop", duration: "2.17 min", videoId: "QuXLQdTJ02M" },
          { id: "p7", title: "How to make instant passport photo", duration: "3.27 min", videoId: "FqzbROvTz_M" },
          { id: "p8",  title: "Skin Retouching Techniques", duration: "28 min", videoId: "AQpHLvzSATs" },
          { id: "p9",  title: "Healing Brush & Clone Stamp", duration: "22 min", videoId: "AQpHLvzSATs" },
          { id: "p10", title: "Frequency Separation", duration: "20 min", videoId: "AQpHLvzSATs" }
        ]
      },
      advanced: {
        label: "🔴 Advanced",
        modules: [
         { id: "p11", title: "How to edit Photo in PhotoShop", duration: "2.17 min", videoId: "QuXLQdTJ02M" },
          { id: "p12", title: "How to make instant passport photo", duration: "3.27 min", videoId: "FqzbROvTz_M" },
          { id: "p13", title: "Creating Presets & Profiles", duration: "25 min", videoId: "AQpHLvzSATs" }
        ]
      }
    },
    quiz: [
      {
        q: "What does RAW format mean in photography?",
        options: ["A compressed image format", "Unprocessed sensor data with full editing latitude", "A black & white photo", "A video format"],
        correct: 1
      },
      {
        q: "Which Lightroom panel controls Saturation and Hue?",
        options: ["Tone Curve", "Detail", "HSL / Color", "Calibration"],
        correct: 2
      },
      {
        q: "What is a 'layer mask' in Photoshop?",
        options: ["A filter effect", "A way to selectively hide/reveal parts of a layer", "A blending mode", "A file format"],
        correct: 1
      },
      {
        q: "What is Frequency Separation used for?",
        options: ["Sharpening edges", "Separating texture and colour for retouching", "Adding bokeh", "Colour grading"],
        correct: 1
      },
      {
        q: "Which tool removes blemishes by sampling nearby pixels?",
        options: ["Crop Tool", "Lasso Tool", "Healing Brush Tool", "Pen Tool"],
        correct: 2
      }
    ]
  },

  graphic: {
    id: "graphic",
    title: "Graphic Designing",
    icon: "fas fa-pen-nib",
    iconClass: "icon-graphic",
    glowClass: "glow-graphic",
    color: "#a855f7",
    description: "Design stunning brands, social media, and UI layouts with Figma, Adobe Illustrator & Canva.",
    levels: {
      beginner: {
        label: "🟢 Beginner",
        modules: [
          { id: "g1", title: "Basic of Coreldraw", duration: "2.39 min", videoId: "J5qPywTJzzc" },
          { id: "g2", title: "Text Edit Style in Coreldraw", duration: "2.38 min", videoId: "IOeuKuvaqnw" },
          { id: "g3", title: "Shape Edit Style in Coreldraw", duration: "2.17 min", videoId: "IibU6goFOmQ" },
          { id: "g4", title: "Use Blend & Contour tools", duration: "3.09 min", videoId: "BpwbK56D5JI" },
          { id: "g5", title: "Use Powerclip in Coreldraw", duration: "3.01 min", videoId: "LRvWChSDqPs" }
        ]
      },
      intermediate: {
        label: "🟡 Intermediate",
        modules: [
          { id: "g6",  title: "How to Create logo in Coreldraw", duration: "2.32 min", videoId: "ASfnAjsS5aw" },
          { id: "g7",  title: "Create logo Using Coreldraw", duration: "7.39 min", videoId: "Ui2k6e05Pbk" },
          { id: "g8",  title: "How to Create Poster Using coreldraw", duration: "12.54 min", videoId: "gNQyILsN378" },
          { id: "g9",  title: "How to Create Poster Using coreldraw - Part 2", duration: "13.38 min", videoId: "-9xfqMbDtNM" },
         
        ]
      },
      advanced: {
        label: "🔴 Advanced",
        modules: [
          { id: "g10",  title: "How to Create logo in Coreldraw", duration: "2.32 min", videoId: "ASfnAjsS5aw" },
          { id: "g11",  title: "Create logo Using Coreldraw", duration: "7.39 min", videoId: "Ui2k6e05Pbk" },
          { id: "g12",  title: "How to Create Poster Using coreldraw", duration: "12.54 min", videoId: "gNQyILsN378" },
          { id: "g13",  title: "How to Create Poster Using coreldraw - Part 2", duration: "13.38 min", videoId: "-9xfqMbDtNM" },
        ]
      }
    },
    quiz: [
      {
        q: "What does CMYK stand for?",
        options: ["Cyan, Magenta, Yellow, Key(Black)", "Color, Mix, Yellow, Keep", "Chrome, Mono, Yellow, Key", "None of the above"],
        correct: 0
      },
      {
        q: "Which colour model is used for screen design?",
        options: ["CMYK", "Pantone", "RGB", "HSB"],
        correct: 2
      },
      {
        q: "What is 'kerning' in typography?",
        options: ["The size of a font", "Spacing between specific letter pairs", "The weight of a font", "Paragraph spacing"],
        correct: 1
      },
      {
        q: "What file format is best for logos (scalable, no quality loss)?",
        options: ["JPEG", "PNG", "GIF", "SVG"],
        correct: 3
      },
      {
        q: "What is a 'design system'?",
        options: ["A computer hardware setup", "A collection of reusable components, styles & guidelines", "A type of software", "A printing technique"],
        correct: 1
      }
    ]
  }
};

// Make globally available
window.COURSES = COURSES;
