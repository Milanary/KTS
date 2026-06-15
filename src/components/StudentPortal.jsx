import { useState, useEffect, useRef } from 'react';
import './AuthStyles.css';

// SVG Icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" /><path d="M12 2a6 6 0 0 1 6 6c0 3.7-2.3 6.9-5.5 8.2a2 2 0 0 1-1 0C8.3 14.9 6 11.7 6 8a6 6 0 0 1 6-6z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" x2="5" y1="12" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 16V8" /><path d="M12 16v-4" /><path d="M17 16v-6" />
  </svg>
);

const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const MicOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" x2="22" y1="2" y2="22" />
    <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
    <path d="M5 10v2a7 7 0 0 0 12 5" />
    <path d="M15 9.34V5a3 3 0 0 0-5.68-1.35" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z" />
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
  </svg>
);

const VideoOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" x2="22" y1="2" y2="22" />
    <path d="M10.66 6H14a2 2 0 0 1 2 2v3.34" />
    <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.34" />
    <path d="m16 12 6-4v8l-2.07-1.38" />
  </svg>
);

const ShareScreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="12" x="3" y="4" rx="2" />
    <path d="M12 12V2" />
    <path d="m15 5-3-3-3 3" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" x2="11" y1="2" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const PhoneOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.68 10.68a16 16 0 0 0 2.64 2.64" />
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
    <line x1="23" x2="1" y1="1" y2="23" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const MaximizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" />
    <path d="M9 21H3v-6" />
    <path d="M21 3l-7 7" />
    <path d="M3 21l7-7" />
  </svg>
);

const MinimizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14h6v-6" />
    <path d="M20 10h-6v6" />
    <path d="M14 10l7-7" />
    <path d="M10 14l-7 7" />
  </svg>
);

const DEFAULT_COURSES = [
  {
    id: 'chcage001',
    title: 'CHCAGE001: Facilitate the empowerment of older people',
    category: 'Age Care Core',
    description: 'Learn techniques to support older people to maintain their independence, protect their human rights, and promote physical and emotional wellbeing.',
    lessonsCount: 5
  },
  {
    id: 'chcage005',
    title: 'CHCAGE005: Provide support to people living with dementia',
    category: 'Age Care Core',
    description: 'Develop specialized skills to deliver care services to dementia patients, handle behavioral fluctuations, and design cognitive enhancement therapies.',
    lessonsCount: 6
  },
  {
    id: 'chcpal001',
    title: 'CHCPAL001: Deliver care using a palliative approach',
    category: 'Age Care Core',
    description: 'Understand palliative care framework standards, support families during end-of-life care, manage pain indicators, and address grief/ethical constraints.',
    lessonsCount: 5
  },
  {
    id: 'chcccs011',
    title: 'CHCCCS011: Meet personal support needs',
    category: 'Care Support',
    description: 'Build core competencies to assist clients with activities of daily living (ADLs), skin integrity management, hygiene routines, and mobility plans.',
    lessonsCount: 4
  },
  {
    id: 'chcleg003',
    title: 'CHCLEG003: Manage legal and ethical compliance',
    category: 'Regulations',
    description: 'Establish standard operational safety benchmarks. Understand duty of care, national privacy principles, and mandatory reporting guidelines in Australia.',
    lessonsCount: 5
  }
];

const COURSE_LESSON_CONTENT = {
  'chcage001': {
    1: {
      title: 'Empowerment Principles & Human Rights Charters',
      desc: 'Understand the concept of empowerment, human rights legislation, and ethical decision making. Learn how to encourage older clients to participate in decision-making processes regarding their daily care schedules.'
    },
    2: {
      title: 'Promoting Social Connection & Inclusion',
      desc: 'Identify barriers to active social participation in aged care settings. Plan and implement tailored inclusion strategies to prevent depression, physical isolation, and cognitive degradation.'
    },
    3: {
      title: 'Supporting Autonomy and Person-Centred Care',
      desc: 'Examine key person-centred design paradigms. Support self-determination by helping clients set personal routines, choose activities of interest, and control their personal space.'
    },
    4: {
      title: 'Identifying Systemic Risks & Institutional Abuse',
      desc: 'Learn to recognize indicators of financial, emotional, physical, or systemic abuse. Understand mandatory report timelines, duty of care obligations, and immediate safety escalations.'
    },
    5: {
      title: 'Advocacy Frameworks and Client Documentation',
      desc: 'Discover national advocacy organizations in Australia. Review standard practices for documenting client feedback, preferences, and human rights compliance parameters.'
    }
  },
  'chcage005': {
    1: {
      title: 'The Neuropathology of Dementia',
      desc: 'Explore the physiological traits of different dementia classifications including Alzheimer\'s disease, vascular dementia, and Lewy body dementia. Study how brain pathways are affected.'
    },
    2: {
      title: 'Person-Centred Care Frameworks in Dementia',
      desc: 'Review the Kitwood Model of dementia care. Learn how a client\'s personal history, hobbies, and family dynamics shape their unique care requirements and sensory choices.'
    },
    3: {
      title: 'Empathetic Communication and Verbal Pacing',
      desc: 'Master communication strategies for dementia care. Practice validation therapy, minimize confusion by using short, positive directions, and learn how to interpret non-verbal triggers.'
    },
    4: {
      title: 'De-escalating Behaviours of Concern',
      desc: 'Identify common environmental triggers (noise, lighting, temperature) that cause distress. Apply non-pharmacological de-escalation protocols and identify underlying physical needs.'
    },
    5: {
      title: 'Designing Cognitive and Sensory Programs',
      desc: 'Understand how sensory stimulation (aroma, music, textured materials) triggers memory pathways. Plan sensory room sessions and reminiscence groups.'
    },
    6: {
      title: 'Supporting Carers and Families through Transition',
      desc: 'Examine emotional adjustments and grief experienced by families. Link caregivers to support services, respite resources, and dementia care support networks.'
    }
  },
  'chcpal001': {
    1: {
      title: 'Palliative Philosophy and Care Standards',
      desc: 'Understand the holistic palliative care framework. Learn how to support quality of life, comfort, and human dignity for clients experiencing progressive life-limiting conditions.'
    },
    2: {
      title: 'Comfort Indicators & Symptom Management',
      desc: 'Identify physical indicators of pain, breathlessness, and distress. Learn how to assist registered nurses with administering comfort measures and apply non-pharmacological therapies.'
    },
    3: {
      title: 'Addressing Emotional, Spiritual, and Cultural Grief',
      desc: 'Explore diverse cultural and spiritual perspectives on death and dying. Develop active listening skills to support patients through fear and anxiety.'
    },
    4: {
      title: 'Supporting Families & Legacy Planning',
      desc: 'Gain competency in supporting grieving family members. Review respite services, legacy projects (memory books), and how to communicate compassionately.'
    },
    5: {
      title: 'Advance Care Directives & Ethical Frameworks',
      desc: 'Examine Advance Care Planning (ACP) and Advance Care Directives (ACD) in Australia. Understand proxy decision-making and legal limits of care worker support.'
    }
  },
  'chcccs011': {
    1: {
      title: 'Assisting with Activities of Daily Living (ADLs)',
      desc: 'Identify personal support requirements. Learn standard procedures to assist with grooming, oral hygiene, dressing, and dignified feeding practices.'
    },
    2: {
      title: 'Pressure Injury Prevention and Repositioning',
      desc: 'Understand the causes of pressure sores and skin tears. Master repositioning logs, turning schedules, and standard skin inspection routines.'
    },
    3: {
      title: 'Hoisting Safety & Manual Transfer Techniques',
      desc: 'Practice safe patient transfers using slide sheets, transfer belts, and mechanical hoists. Review risk management templates and ergonomics to prevent worker injury.'
    },
    4: {
      title: 'Infection Control Protocols & Personal Protection',
      desc: 'Study hand hygiene, standard precautions, PPE donning/doffing sequences, and the safe disposal of biohazardous wastes and soiled linens.'
    }
  },
  'chcleg003': {
    1: {
      title: 'Aged Care Quality Standards compliance',
      desc: 'Deep dive into the 8 Aged Care Quality Standards in Australia. Review compliance checks, audit systems, and organizational accountability protocols.'
    },
    2: {
      title: 'Balancing Duty of Care with Dignity of Risk',
      desc: 'Analyze standard legal conflicts. Learn how to support a client\'s right to choose activities that carry risk while maintaining safe support baselines.'
    },
    3: {
      title: 'Mandatory Reporting & Abuse Disclosures',
      desc: 'Define reportable assaults under the Serious Incident Response Scheme (SIRS). Learn reporting timelines and legal obligations to protect whistleblowers.'
    },
    4: {
      title: 'Privacy, Confidentiality, and Medical Records',
      desc: 'Review privacy legislation in Australian aged care. Understand constraints on sharing medical information, secure storage of logs, and client consent policies.'
    },
    5: {
      title: 'WHS Hazard Mapping & Incident Reporting',
      desc: 'Identify hazards in aged care workspaces (trips, slips, chemical exposure). Complete mock incident reports, risk assessment templates, and hazard logs.'
    }
  }
};

const PPT_SLIDES = Array.from({ length: 19 }, (_, i) => ({
  title: `Slide ${i + 1}`,
  image: `/slides/slide_${i + 1}.png`,
  footer: `Slide ${i + 1} of 19`
}));

const PARTICIPANTS_LIST = [
  { id: 'teacher', name: 'Milan Aryal', role: 'Teacher', avatar: 'MA', isTeacher: true },
  { id: 'you', name: 'Bhishan Bogati', role: 'You', avatar: 'BB', isYou: true },
  
  // 8 Girls names
  { id: 'girl1', name: 'Aaradhya Shrestha', avatar: 'AS', isGirl: true, isMuted: false },
  { id: 'girl2', name: 'Binita Dahal', avatar: 'BD', isGirl: true, isMuted: true },
  { id: 'girl3', name: 'Deepa Adhikari', avatar: 'DA', isGirl: true, isMuted: false },
  { id: 'girl4', name: 'Jyoti Rajbhandari', avatar: 'JR', isGirl: true, isMuted: true },
  { id: 'girl5', name: 'Kritika Karki', avatar: 'KK', isGirl: true, isMuted: false },
  { id: 'girl6', name: 'Pooja Thapa', avatar: 'PT', isGirl: true, isMuted: true },
  { id: 'girl7', name: 'Roshani Baniya', avatar: 'RB', isGirl: true, isMuted: false },
  { id: 'girl8', name: 'Sabina Acharya', avatar: 'SA', isGirl: true, isMuted: true },
  
  // 14 Boys names
  { id: 'boy1', name: 'Anup Ghimire', avatar: 'AG', isMuted: false },
  { id: 'boy2', name: 'Bibek Poudel', avatar: 'BP', isMuted: true },
  { id: 'boy3', name: 'Dinesh Khadka', avatar: 'DK', isMuted: false },
  { id: 'boy4', name: 'Hari Basnet', avatar: 'HB', isMuted: true },
  { id: 'boy5', name: 'Ishwar Lamichhane', avatar: 'IL', isMuted: false },
  { id: 'boy6', name: 'Kiran Bhattarai', avatar: 'KB', isMuted: true },
  { id: 'boy7', name: 'Manish Joshi', avatar: 'MJ', isMuted: false },
  { id: 'boy8', name: 'Nabin Shrestha', avatar: 'NS', isMuted: true },
  { id: 'boy9', name: 'Pramod Rijal', avatar: 'PR', isMuted: false },
  { id: 'boy10', name: 'Raju Tamang', avatar: 'RT', isMuted: true },
  { id: 'boy11', name: 'Sandesh Pokharel', avatar: 'SP', isMuted: false },
  { id: 'boy12', name: 'Sunil Maharjan', avatar: 'SM', isMuted: true },
  { id: 'boy13', name: 'Uttam Devkota', avatar: 'UD', isMuted: false },
  { id: 'boy14', name: 'Yogesh Gurung', avatar: 'YG', isMuted: true }
];


export default function StudentPortal({ onLogout, theme, toggleTheme }) {
  const [activeMenu, setActiveMenu] = useState('dashboard'); // 'dashboard' | 'classroom' | 'schedule' | 'profile'
  const [courses] = useState(() => {
    const savedCourses = localStorage.getItem('kts_courses');
    if (savedCourses) {
      try {
        const parsed = JSON.parse(savedCourses);
        const hasOldCourses = parsed.some(
          (c) => c.id.includes('course-react') || c.id.includes('course-css') || c.id.includes('course-nodejs')
        );
        if (!hasOldCourses) {
          return parsed;
        }
      } catch {
        // Fall through on JSON errors
      }
    }
    localStorage.setItem('kts_courses', JSON.stringify(DEFAULT_COURSES));
    return DEFAULT_COURSES;
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(1);
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('kts_student_progress');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  const saveProgress = (updatedProgress) => {
    setProgress(updatedProgress);
    localStorage.setItem('kts_student_progress', JSON.stringify(updatedProgress));
  };

  const toggleLessonComplete = (courseId, lessonNum) => {
    const key = `${courseId}-${lessonNum}`;
    const nextProgress = {
      ...progress,
      [key]: !progress[key]
    };
    saveProgress(nextProgress);
  };

  // Live Meeting states and refs
  const [activeMeeting, setActiveMeeting] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCamOn, setIsCamOn] = useState(false);
  const [isScreenShared, setIsScreenShared] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isTeacherMuted, setIsTeacherMuted] = useState(true);
  const [isPlayingClassroomVideo, setIsPlayingClassroomVideo] = useState(false);
  const [hasMediaError, setHasMediaError] = useState(false);
  const [pptSlideIndex, setPptSlideIndex] = useState(0);
  const [meetingViewIndex, setMeetingViewIndex] = useState(1); // 0 = Participants Grid, 1 = Presentation/PPT
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Lobby and countdown states
  const [showLobby, setShowLobby] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2026-06-15T10:30:00+05:45');
      const diff = target - now;
      return diff > 0 ? diff : 0;
    };
    return calculateTimeLeft();
  });

  const [meetingEnded, setMeetingEnded] = useState(false);

  const [joinedCount, setJoinedCount] = useState(0);


  // PPT/PDF Slide Upload States
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);
  const [uploadedFileType, setUploadedFileType] = useState(null); // 'pdf' | 'images' | null
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedImageIndex, setUploadedImageIndex] = useState(0);

  // Desktop Mouse Drag Swipe States
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const videoRef = useRef(null);
  const meetingAudioRef = useRef(null);
  const teacherVideoRef = useRef(null);
  const meetingRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [micVolume, setMicVolume] = useState(0);


  const startWebcam = async () => {
    setHasMediaError(false);
    try {
      // Clear any existing stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
      closeAudioAnalyser();

      // Request media constraints
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240 },
        audio: true
      });
      streamRef.current = stream;
      
      // Update webcam DOM reference
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      // Enforce toggled parameters
      stream.getVideoTracks().forEach((track) => {
        track.enabled = isCamOn;
      });
      stream.getAudioTracks().forEach((track) => {
        track.enabled = isMicOn;
      });

      if (isMicOn) {
        setupAudioAnalyser(stream);
      }
    } catch (err) {
      console.warn("Could not capture local media devices stream:", err);
      setHasMediaError(true);
    }
  };

  const stopWebcam = () => {
    closeAudioAnalyser();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const setupAudioAnalyser = (stream) => {
    if (!stream.getAudioTracks().length) return;
    try {
      closeAudioAnalyser();
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContextClass();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      audioContextRef.current = audioCtx;
      analyserRef.current = analyser;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        setMicVolume(Math.round(average));
        animationFrameRef.current = requestAnimationFrame(draw);
      };
      draw();
    } catch (e) {
      console.warn("Audio Context setup skipped:", e);
    }
  };

  const closeAudioAnalyser = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch (e) {
        console.warn("Error closing audio context:", e);
      }
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    setMicVolume(0);
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2026-06-15T10:30:00+05:45');
      const diff = target - now;
      return diff > 0 ? diff : 0;
    };

    const timer = setInterval(() => {
      const currentDiff = calculateTimeLeft();
      setTimeLeft(currentDiff);
      if (currentDiff <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-end meeting at 11:00 AM Nepal time
  useEffect(() => {
    if (!activeMeeting) return;
    const endTime = new Date('2026-06-15T11:00:00+05:45');

    const checkEnd = setInterval(() => {
      const now = new Date();
      if (now >= endTime) {
        clearInterval(checkEnd);
        setActiveMeeting(false);
        setMeetingEnded(true);
        setIsScreenShared(false);
        setMeetingViewIndex(1);
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      }
    }, 5000); // check every 5 seconds

    return () => clearInterval(checkEnd);
  }, [activeMeeting]);

  const getCountdownString = () => {
    if (timeLeft <= 0) return '00:00:00';
    const totalSecs = Math.floor(timeLeft / 1000);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Sync streams with active meeting status
  useEffect(() => {
    if (activeMeeting) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      startWebcam();
    } else {
      stopWebcam();
    }
    return () => stopWebcam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMeeting]);

  // Dynamic student join simulation (one student every 3 minutes)
  useEffect(() => {
    if (activeMeeting) {
      setJoinedCount(0); // reset count
      // Initial start logs
      setChatMessages([
        {
          isSystem: true,
          text: "Milan Aryal (Teacher) is in the classroom.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          isSystem: true,
          text: "Bhishan Bogati (You) joined the classroom.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);

      const interval = setInterval(() => {
        setJoinedCount((prev) => {
          const nextVal = prev + 1;
          const totalStudents = PARTICIPANTS_LIST.length - 2; // excluding Teacher & You
          if (nextVal <= totalStudents) {
            const newStudent = PARTICIPANTS_LIST[2 + prev];
            // Add join system message in chat
            setChatMessages((msgPrev) => [
              ...msgPrev,
              {
                isSystem: true,
                text: `${newStudent.name} joined the classroom`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ]);
            return nextVal;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 4000); // 4 seconds, so all 22 students join within 1.5 minutes (88 seconds total)

      return () => {
        clearInterval(interval);
      };
    } else {
      setJoinedCount(0);
      setChatMessages([]);
    }
  }, [activeMeeting]);

  // Play live meeting audio broadcast sync with classroom start time
  useEffect(() => {
    if (activeMeeting) {
      const audio = new Audio('/Tribhuvan_Rajpath_2.m4a');
      meetingAudioRef.current = audio;

      const target = new Date('2026-06-15T10:30:00+05:45');
      
      const playAudio = () => {
        const diffSeconds = (new Date() - target) / 1000;
        if (diffSeconds > 0) {
          if (diffSeconds < audio.duration) {
            audio.currentTime = diffSeconds;
            audio.play().catch((err) => console.warn("Live audio play failed:", err));
          } else {
            console.log("Live audio has already completed.");
          }
        } else {
          audio.play().catch((err) => console.warn("Live audio play failed:", err));
        }
      };

      audio.addEventListener('loadedmetadata', playAudio);

      if (audio.readyState >= 1) {
        playAudio();
      } else {
        audio.load();
      }

      return () => {
        if (meetingAudioRef.current) {
          meetingAudioRef.current.pause();
          meetingAudioRef.current = null;
        }
      };
    }
  }, [activeMeeting]);

  // Sync toggles dynamically
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.getVideoTracks().forEach((track) => {
        track.enabled = isCamOn;
      });
    }
  }, [isCamOn]);

  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = isMicOn;
      });
      if (isMicOn) {
        setupAudioAnalyser(streamRef.current);
      } else {
        closeAudioAnalyser();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMicOn]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!meetingRef.current) return;
    if (!document.fullscreenElement) {
      meetingRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeRight && meetingViewIndex === 1) {
      setMeetingViewIndex(0); // Swipe right to see participants
    } else if (isSwipeLeft && meetingViewIndex === 0) {
      setMeetingViewIndex(1); // Swipe left to see slides
    }
    
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Desktop Mouse Drag to Swipe
  const handleMouseDown = (e) => {
    // Avoid swipe conflicts if user clicks on controls/buttons
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select') || e.target.closest('a') || e.target.closest('video') || e.target.closest('iframe')) {
      return;
    }
    if (e.button !== 0) return; // Only left click
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = () => {
    // Optional live dragging animation offsets can go here
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    const diffX = dragStartX - e.clientX;
    const swipeThreshold = 60;
    if (diffX < -swipeThreshold && meetingViewIndex === 1) {
      setMeetingViewIndex(0); // drag right -> show participants
    } else if (diffX > swipeThreshold && meetingViewIndex === 0) {
      setMeetingViewIndex(1); // drag left -> show slides
    }
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // PPT/PDF Slides Upload handler
  const handleSlideUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files || !files.length) return;

    const file = files[0];
    
    // Revoke previous URLs to prevent memory leaks
    if (uploadedFileUrl) {
      URL.revokeObjectURL(uploadedFileUrl);
    }
    uploadedImages.forEach(url => URL.revokeObjectURL(url));

    if (file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setUploadedFileUrl(url);
      setUploadedFileType('pdf');
      setUploadedImages([]);
    } else if (file.type.startsWith("image/")) {
      const urls = files.map(f => URL.createObjectURL(f));
      setUploadedImages(urls);
      setUploadedImageIndex(0);
      setUploadedFileType('images');
      setUploadedFileUrl(null);
    } else {
      alert("Please upload a PDF document or slide images. (For PPTX files, save as PDF or Images first then upload).");
    }
  };

  const clearUploadedSlides = () => {
    if (uploadedFileUrl) {
      URL.revokeObjectURL(uploadedFileUrl);
    }
    uploadedImages.forEach(url => URL.revokeObjectURL(url));
    setUploadedFileUrl(null);
    setUploadedFileType(null);
    setUploadedImages([]);
    setUploadedImageIndex(0);
  };

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = {
      sender: 'Bhishan Bogati (You)',
      text: chatInput.trim(),
      self: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const nextMessages = [...chatMessages, newMsg];
    setChatMessages(nextMessages);
    setChatInput('');

    // Mock teacher response
    setTimeout(() => {
      const teacherReplies = [
        "Good morning Bhishan! Today we will go through the orientation details for CERT IV in Ageing Support, including the 120-hour work placement log.",
        "That is correct. Standards require that all core units (such as Dementia care and Palliative approaches) must have their digital checklist finalized.",
        "Excellent. Feel free to mark modules as complete in the Classroom tab once you study the requirements."
      ];
      const currentRepliesCount = nextMessages.filter(m => m.sender && m.sender.startsWith('Milan Aryal')).length - 1;
      const replyText = teacherReplies[currentRepliesCount % teacherReplies.length] || "Let's review standard operational safety parameters.";
      
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'Milan Aryal (Teacher)',
          text: replyText,
          self: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1500);
  };

  // Helper selectors
  const getCourseCompletedLessons = (courseId) => {
    let completed = 0;
    const course = courses.find((c) => c.id === courseId);
    if (!course) return 0;
    
    for (let i = 1; i <= course.lessonsCount; i++) {
      if (progress[`${courseId}-${i}`] === true) {
        completed++;
      }
    }
    return completed;
  };

  const getCoursePercent = (courseId) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return 0;
    const completed = getCourseCompletedLessons(courseId);
    return Math.round((completed / course.lessonsCount) * 100);
  };

  // Student metrics
  const completedLessonsTotal = Object.values(progress).filter(Boolean).length;
  const totalXP = completedLessonsTotal * 10;
  
  const coursesCompletedCount = courses.filter((c) => {
    return getCourseCompletedLessons(c.id) === c.lessonsCount && c.lessonsCount > 0;
  }).length;

  const currentStreak = completedLessonsTotal > 0 ? 3 : 0;

  // Calculate overall program completion (CERT IV Ageing Support consists of our courses)
  const getOverallProgramProgress = () => {
    let totalLessons = 0;
    let completed = 0;
    courses.forEach((c) => {
      totalLessons += c.lessonsCount;
      completed += getCourseCompletedLessons(c.id);
    });
    if (totalLessons === 0) return 0;
    return Math.round((completed / totalLessons) * 100);
  };

  const programPercent = getOverallProgramProgress();

  const getActiveLessonContent = () => {
    const courseId = selectedCourse?.id;
    const content = COURSE_LESSON_CONTENT[courseId];
    if (content && content[currentLessonIndex]) {
      return content[currentLessonIndex];
    }
    return {
      title: `Lesson Module 0${currentLessonIndex}: Competency Outline`,
      desc: `Review the custom syllabus content mapped to the newly published ${selectedCourse?.title} course unit. Analyze practical case files, check parameters, and mark this lesson complete to update progress records.`
    };
  };

  const activeLesson = getActiveLessonContent();

  // Badges lists
  const achievements = [
    {
      id: 'first-lesson',
      title: 'First Step taken',
      desc: 'Complete at least 1 ageing support lesson.',
      unlocked: completedLessonsTotal >= 1,
      badgeSymbol: '🎖️'
    },
    {
      id: 'rising-star',
      title: 'Rising Scholar',
      desc: 'Gain 50 XP (5 lessons completed).',
      unlocked: totalXP >= 50,
      badgeSymbol: '⭐'
    },
    {
      id: 'dementia-badge',
      title: 'Dementia Care Specialist',
      desc: 'Achieve 100% completion in the dementia support unit.',
      unlocked: getCoursePercent('chcage005') === 100,
      badgeSymbol: '🧠'
    },
    {
      id: 'lms-champion',
      title: 'Ageing Care Graduate',
      desc: 'Complete all courses in your syllabus.',
      unlocked: courses.length > 0 && courses.every((c) => getCoursePercent(c.id) === 100),
      badgeSymbol: '🏆'
    }
  ];

  const mockSchedule = [
    {
      id: 1,
      hour: '10:30',
      ampm: 'AM',
      courseCode: 'ORIENTATION',
      subject: 'Introductory Class',
      location: 'Aged Care Lecture Theatre / Zoom Live Session'
    }
  ];

  const getCanvasTitle = () => {
    switch (activeMenu) {
      case 'dashboard':
        return 'LMS Dashboard';
      case 'classroom':
        return 'My Classroom';
      case 'schedule':
        return 'Study Schedule';
      case 'profile':
        return 'Student Profile';
      default:
        return 'LMS Portal';
    }
  };

  const activeParticipants = [
    PARTICIPANTS_LIST[0], // Milan Aryal (Teacher)
    PARTICIPANTS_LIST[1], // Bhishan Bogati (You)
    ...PARTICIPANTS_LIST.slice(2, 2 + joinedCount)
  ];

  return (
    <div className="dashboard-layout">
      {/* PERSISTENT SIDEBAR */}
      <aside className="app-sidebar">
        <div className="sidebar-top">
          {/* Brand branding */}
          <div className="sidebar-brand">
            <div className="logo-container" style={{ width: 36, height: 36, fontSize: 18, borderRadius: 10, margin: 0 }}>
              K
            </div>
            <span>KTS Portal</span>
          </div>

          {/* Profile card */}
          <div className="sidebar-profile">
            <div className="sidebar-avatar">B</div>
            <div className="sidebar-profile-info">
              <span className="sidebar-profile-name">Bhishan Bogati</span>
              <span className="sidebar-profile-role">Aged Care Student</span>
            </div>
          </div>

          {/* Sidebar Menu options */}
          <nav className="sidebar-menu">
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'dashboard' ? 'active' : ''}`}
              onClick={() => {
                setActiveMenu('dashboard');
                setSelectedCourse(null);
              }}
            >
              <span className="sidebar-link-icon"><ChartIcon /></span>
              <span>LMS Dashboard</span>
            </button>
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'classroom' ? 'active' : ''}`}
              onClick={() => setActiveMenu('classroom')}
            >
              <span className="sidebar-link-icon"><BookOpenIcon /></span>
              <span>My Classroom</span>
            </button>
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'schedule' ? 'active' : ''}`}
              onClick={() => {
                setActiveMenu('schedule');
                setSelectedCourse(null);
              }}
            >
              <span className="sidebar-link-icon"><CalendarIcon /></span>
              <span>Study Schedule</span>
            </button>
            <button 
              type="button" 
              className={`sidebar-link ${activeMenu === 'profile' ? 'active' : ''}`}
              onClick={() => {
                setActiveMenu('profile');
                setSelectedCourse(null);
              }}
            >
              <span className="sidebar-link-icon"><UserIcon /></span>
              <span>Student Profile</span>
            </button>
          </nav>
        </div>

        {/* Log Out button */}
        <button 
          type="button" 
          className="btn-logout" 
          onClick={onLogout}
        >
          <LogOutIcon />
          <span>Log Out</span>
        </button>
      </aside>

      {/* RIGHT MAIN CANVAS */}
      <div className="main-canvas">
        {/* Canvas Header */}
        <header className="canvas-header">
          <h2 className="canvas-title">{getCanvasTitle()}</h2>

        </header>

        {/* Scrollable Content Area */}
        <main className="dashboard-content">
          <div className="bg-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2" style={{ width: 400, height: 400 }}></div>
          </div>

          {/* Tab Content 1: LMS Dashboard */}
          {activeMenu === 'dashboard' && (
            <>
              {/* Greeting Banner */}
              <section className="welcome-banner">
                <h1>Welcome, Bhishan Bogati</h1>
                <p>Course Track: **Certificate IV in Ageing Support (CHC43015)**. Track your progress, study syllabus items, and check schedules.</p>
                <span className="user-badge user-badge-green">
                  Student Member
                </span>
              </section>

              {/* Student Metrics */}
              <section className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-icon">
                    <AwardIcon />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Accumulated XP</span>
                    <span className="metric-value">{totalXP} XP</span>
                    <span className="metric-trend">
                      {completedLessonsTotal} lessons completed
                    </span>
                  </div>
                </div>

                <div className="metric-card color-accent">
                  <div className="metric-icon">
                    <TrophyIcon />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Completed Units</span>
                    <span className="metric-value">{coursesCompletedCount} / {courses.length}</span>
                    <span className="metric-trend" style={{ color: 'var(--accent)' }}>
                      100% competency achieved
                    </span>
                  </div>
                </div>

                <div className="metric-card color-success">
                  <div className="metric-icon">
                    <CalendarIcon />
                  </div>
                  <div className="metric-info">
                    <span className="metric-title">Study Streak</span>
                    <span className="metric-value">{currentStreak} Days</span>
                    <span className="metric-trend" style={{ color: 'var(--success)' }}>
                      {currentStreak > 0 ? 'Consistent progress!' : 'Complete a lesson to streak'}
                    </span>
                  </div>
                </div>
              </section>

              {/* Badges and Rewards list */}
              <section className="section-card">
                <h2 className="section-title">Ageing Care Achievement Badges</h2>
                <div className="achievements-grid">
                  {achievements.map((ach) => (
                    <div key={ach.id} className={`achievement-card ${ach.unlocked ? 'unlocked' : ''}`}>
                      <div className="achievement-icon">
                        {ach.unlocked ? ach.badgeSymbol : '🔒'}
                      </div>
                      <span className="achievement-title">{ach.title}</span>
                      <span className="achievement-desc">{ach.desc}</span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Tab Content 2: Classroom Catalog and Classroom View */}
          {activeMenu === 'classroom' && (
            <>
              {!selectedCourse ? (
                <section className="section-card">
                  <h2 className="section-title">Enrolled Aged Care Core Units</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 16 }}>
                    Units required to complete the Certificate IV in Ageing Support (CHC43015) qualification.
                  </p>
                  <div className="courses-grid">
                    {courses.map((course) => {
                      const percent = getCoursePercent(course.id);
                      return (
                        <div key={course.id} className="course-card enrolled">
                          <div>
                            <span className="course-tag">{course.category}</span>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.description}</p>
                          </div>
                          
                          <div className="progress-container">
                            <div className="progress-header">
                              <span>Unit Progress</span>
                              <span>{percent}%</span>
                            </div>
                            <div className="progress-track">
                              <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
                            </div>
                          </div>

                          <div className="course-footer" style={{ borderTop: 'none', paddingUp: 0, marginTop: 12 }}>
                            <span className="course-meta">
                              <BookOpenIcon />
                              <span>{course.lessonsCount} lessons</span>
                            </span>
                            <button 
                              type="button" 
                              className="btn-primary"
                              style={{ width: 'auto', padding: '8px 16px', borderRadius: 8, fontSize: 13 }}
                              onClick={() => {
                                setSelectedCourse(course);
                                setCurrentLessonIndex(1);
                                setIsPlayingClassroomVideo(false);
                              }}
                            >
                              Enter Classroom
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ) : (
                /* Interactive Classroom Player View */
                <section className="classroom-container">
                  {/* Sidebar Outlines */}
                  <div className="classroom-sidebar">
                    <button 
                      type="button" 
                      className="classroom-back-btn" 
                      onClick={() => setSelectedCourse(null)}
                    >
                      <ArrowLeftIcon />
                      <span>All Units</span>
                    </button>

                    <span className="sidebar-title">
                      <BookOpenIcon />
                      <span>Syllabus lessons</span>
                    </span>

                    <div className="lessons-list">
                      {Array.from({ length: selectedCourse.lessonsCount }, (_, index) => {
                        const lessonNum = index + 1;
                        const key = `${selectedCourse.id}-${lessonNum}`;
                        const isCompleted = progress[key] === true;
                        const lessonDetails = COURSE_LESSON_CONTENT[selectedCourse.id]?.[lessonNum] || { title: `Lesson Module 0${lessonNum}` };
                        return (
                          <div 
                            key={lessonNum} 
                            className={`lesson-item ${currentLessonIndex === lessonNum ? 'active' : ''}`}
                            onClick={() => {
                              setCurrentLessonIndex(lessonNum);
                              setIsPlayingClassroomVideo(false);
                            }}
                          >
                            <div className="lesson-info">
                              <span className="lesson-num">{lessonNum}</span>
                              <span className="lesson-title-text" style={{ fontSize: '13.5px' }}>{lessonDetails.title}</span>
                            </div>
                            {isCompleted && (
                              <span className="lesson-status-icon">
                                <CheckCircleIcon />
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Main Player Display Panel */}
                  <div className="classroom-viewer">
                    <div>
                      <div className="classroom-header">
                        <div>
                          <span className="course-tag">{selectedCourse.category}</span>
                          <h2 style={{ fontSize: 22, fontWeight: 700, margin: '6px 0 0', color: 'var(--text-primary)' }}>
                            {selectedCourse.title}
                          </h2>
                          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                            Unit Topic {currentLessonIndex} of {selectedCourse.lessonsCount}
                          </p>
                        </div>
                      </div>

                      {/* Simulated / Real Player View */}
                      {isPlayingClassroomVideo ? (
                        <div className="classroom-video-player active" style={{ padding: 0 }}>
                          <video 
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
                            controls 
                            autoPlay 
                            className="classroom-html5-video"
                            style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover', display: 'block' }}
                          />
                        </div>
                      ) : (
                        <div 
                          className="classroom-video-player" 
                          onClick={() => setIsPlayingClassroomVideo(true)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="player-icon-glow">
                            <PlayIcon />
                          </div>
                          <h3 style={{ fontSize: 17, color: 'white', fontWeight: 600, margin: '0 0 4px', textAlign: 'center', padding: '0 16px' }}>
                            Lecture: {activeLesson.title}
                          </h3>
                          <span className="player-subtext">Click to stream ageing care lecture</span>
                        </div>
                      )}

                      <div className="classroom-content">
                        <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
                          {activeLesson.title}
                        </h3>
                        <p className="lesson-desc">
                          {activeLesson.desc}
                        </p>
                      </div>
                    </div>

                    {/* Progress and Completion Controls */}
                    <div className="classroom-action-row">
                      <button
                        type="button"
                        className={`btn-complete-toggle ${progress[`${selectedCourse.id}-${currentLessonIndex}`] ? 'completed' : ''}`}
                        onClick={() => toggleLessonComplete(selectedCourse.id, currentLessonIndex)}
                      >
                        <CheckCircleIcon />
                        <span>
                          {progress[`${selectedCourse.id}-${currentLessonIndex}`] ? 'Lesson Completed' : 'Mark Lesson as Complete'}
                        </span>
                      </button>

                      <div style={{ display: 'flex', gap: 10 }}>
                        <button
                          type="button"
                          className="classroom-back-btn"
                          disabled={currentLessonIndex === 1}
                          onClick={() => {
                            setCurrentLessonIndex((prev) => prev - 1);
                            setIsPlayingClassroomVideo(false);
                          }}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btn-primary"
                          style={{ width: 'auto', padding: '8px 16px', borderRadius: 10, fontSize: 13 }}
                          disabled={currentLessonIndex === selectedCourse.lessonsCount}
                          onClick={() => {
                            setCurrentLessonIndex((prev) => prev + 1);
                            setIsPlayingClassroomVideo(false);
                          }}
                        >
                          Next Lesson
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </>
          )}

          {/* Tab Content 3: Study Schedule */}
          {activeMenu === 'schedule' && (
            activeMeeting ? (
              <section className="meeting-layout" ref={meetingRef}>
                {/* Main Video Presentation Display */}
                <div className="meeting-video-area">
                  <div 
                    className="meeting-viewport"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative', overflow: 'hidden', padding: 0, display: 'block', cursor: isDragging ? 'grabbing' : 'grab' }}
                  >
                     {/* Sliding Track */}
                    <div 
                      className="meeting-slider-track" 
                      style={{
                        display: 'flex',
                        width: '200%',
                        minWidth: '200%',
                        height: '100%',
                        transform: `translateX(-${meetingViewIndex * 50}%)`,
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        userSelect: 'none'
                      }}
                    >
                      {/* Panel 1: Participants List (Index 0) */}
                      <div className="meeting-slide-panel" style={{ width: '50%', minWidth: '50%', flexShrink: 0, height: '100%', padding: '24px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          marginBottom: '16px',
                          borderBottom: '1px solid var(--border-card)',
                          paddingBottom: '12px'
                        }}>
                          <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Class Participants
                             <span style={{ fontSize: '11px', background: 'rgba(99, 102, 241, 0.08)', padding: '2px 8px', borderRadius: '10px', color: 'var(--primary)', fontWeight: 'bold' }}>
                               {activeParticipants.length} Online
                             </span>
                          </h3>
                        </div>

                        {/* Search Bar */}
                        <div style={{ position: 'relative', marginBottom: '16px' }}>
                          <input 
                            type="text" 
                            placeholder="Search participants..." 
                            style={{
                              width: '100%',
                              background: 'rgba(0, 0, 0, 0.02)',
                              border: '1px solid var(--border-card)',
                              borderRadius: '10px',
                              padding: '8px 12px 8px 36px',
                              fontSize: '13px',
                              color: 'var(--text-primary)',
                              boxSizing: 'border-box',
                              outline: 'none'
                            }}
                            disabled
                          />
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </div>

                        {/* Scrollable List Container */}
                        <div className="participants-list-scroll" style={{
                          flex: 1,
                          overflowY: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '6px'
                        }}>
                           {activeParticipants.map((p) => {
                            const avatarBg = p.isTeacher 
                              ? 'linear-gradient(135deg, #f59e0b, #d97706)' 
                              : p.isYou
                              ? 'var(--primary)' 
                              : p.isGirl 
                              ? 'linear-gradient(135deg, #ec4899, #8b5cf6)' 
                              : 'linear-gradient(135deg, #3b82f6, #06b6d4)';

                            return (
                              <div key={p.id} className="participant-list-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: p.isYou ? 'rgba(99, 102, 241, 0.06)' : 'rgba(0, 0, 0, 0.01)',
                                border: p.isYou ? '1px solid var(--primary)' : '1px solid var(--border-card)',
                                borderRadius: '12px',
                                padding: '10px 14px',
                                transition: 'all 0.2s ease'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  {/* Avatar circle */}
                                  <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: avatarBg,
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    flexShrink: 0
                                  }}>
                                    {p.avatar}
                                  </div>
                                  
                                  {/* Name and Role labels */}
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                    <span style={{ fontSize: '13.5px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                      {p.name} {p.isYou && <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontWeight: 'normal' }}>(You)</span>}
                                    </span>
                                    <span style={{ fontSize: '9px', color: p.isTeacher ? 'var(--warning)' : p.isYou ? 'var(--primary)' : 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                      {p.isTeacher ? 'Teacher' : p.isYou ? 'Student (You)' : 'Student'}
                                    </span>
                                  </div>
                                </div>

                                {/* Status icons */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  {/* Microphone status icon */}
                                  {p.isTeacher ? (
                                    /* Teacher Mic is ON */
                                    <span style={{ display: 'inline-flex' }} title="Teacher Mic Active">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                        <line x1="12" x2="12" y1="19" y2="22" />
                                      </svg>
                                    </span>
                                  ) : (
                                    /* All other participants Mic is OFF */
                                    <span style={{ display: 'inline-flex', opacity: 0.4 }} title="Mic Muted">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                        <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
                                        <path d="M5 10v2a7 7 0 0 0 12 5" />
                                        <path d="M15 9.34V5a3 3 0 0 0-5.68-1.35" />
                                        <line x1="12" x2="12" y1="19" y2="22" />
                                      </svg>
                                    </span>
                                  )}

                                  {/* Camera status icon - ALL participants Video is OFF */}
                                  <span style={{ display: 'inline-flex', opacity: 0.4 }} title="Video Offline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                      <line x1="2" x2="22" y1="2" y2="22" />
                                      <path d="M10.66 6H14a2 2 0 0 1 2 2v3.34" />
                                      <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.34" />
                                      <path d="m16 12 6-4v8l-2.07-1.38" />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Panel 2: PDF Presentation (Index 1) */}
                      <div className="meeting-slide-panel" style={{ width: '50%', minWidth: '50%', flexShrink: 0, height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative' }}>

                        {/* PDF Header label */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid var(--border-card)' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>Certificate IV Ageing Support — Orientation Presentation</span>
                          <span style={{ fontSize: '11px', background: 'rgba(99,102,241,0.08)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '10px', fontWeight: '600', marginLeft: 'auto' }}>PDF</span>
                        </div>

                        {/* PDF iframe viewer */}
                        <div style={{
                          flex: 1,
                          borderRadius: '12px',
                          overflow: 'hidden',
                          border: '1px solid var(--border-card)',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                          background: '#525659'
                        }}>
                          <iframe
                            src="/Certificate_IV_Ageing_Support_Orientation_Presentation.pdf"
                            title="Certificate IV Ageing Support Orientation Presentation"
                            style={{
                              width: '100%',
                              height: '100%',
                              border: 'none',
                              display: 'block'
                            }}
                            allow="fullscreen"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Small Slider Toggle at the bottom of the viewport */}
                    <div className="bottom-view-slider" style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 40,
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '3px',
                      borderRadius: '20px',
                      border: '1px solid var(--border-card)',
                      backdropFilter: 'blur(8px)',
                      width: '240px',
                      height: '32px',
                      boxShadow: '0 4px 12px rgba(99,102,241,0.06)',
                      userSelect: 'none'
                    }}>
                      {/* Sliding Thumb background overlay */}
                      <div style={{
                        position: 'absolute',
                        top: '3px',
                        left: meetingViewIndex === 0 ? '3px' : '120px',
                        width: '117px',
                        height: '26px',
                        background: 'var(--primary)',
                        borderRadius: '16px',
                        transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 1
                      }} />
                      
                      {/* Option 1: Participants */}
                      <button
                        type="button"
                        style={{
                          flex: 1,
                          height: '100%',
                          background: 'transparent',
                          border: 'none',
                          color: meetingViewIndex === 0 ? '#fff' : 'var(--text-secondary)',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          zIndex: 2,
                          textAlign: 'center',
                          outline: 'none',
                          transition: 'color 0.2s'
                        }}
                        onClick={() => setMeetingViewIndex(0)}
                      >
                        👥 Participants
                      </button>
                      
                      {/* Option 2: PPT Presentation */}
                      <button
                        type="button"
                        style={{
                          flex: 1,
                          height: '100%',
                          background: 'transparent',
                          border: 'none',
                          color: meetingViewIndex === 1 ? '#fff' : 'var(--text-secondary)',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          zIndex: 2,
                          textAlign: 'center',
                          outline: 'none',
                          transition: 'color 0.2s'
                        }}
                        onClick={() => setMeetingViewIndex(1)}
                      >
                        🖳 Presentation
                      </button>
                    </div>

                    {/* Swipe hint label at bottom */}
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '9px',
                      color: 'var(--text-muted)',
                      pointerEvents: 'none',
                      zIndex: 35,
                      fontWeight: '600'
                    }}>
                      {meetingViewIndex === 1 ? "Swipe right to see participants →" : "← Swipe left to view slides"}
                    </div>

                    {/* Picture in picture webcam stream (Only visible floating on slides view to avoid redundancy) */}
                    <div 
                      className={`meeting-pip ${(isCamOn && !hasMediaError) ? '' : 'cam-off'}`}
                      style={{
                        display: meetingViewIndex === 1 ? 'flex' : 'none',
                        top: '24px',
                        right: '24px',
                        width: '130px',
                        height: '98px',
                        zIndex: 38
                      }}
                    >
                      <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        muted 
                        className="meeting-pip-webcam"
                        style={{ 
                          transform: 'scaleX(-1)', 
                          display: (isCamOn && !hasMediaError) ? 'block' : 'none' 
                        }}
                      />
                      {(!isCamOn || hasMediaError) && (
                        <div className="meeting-pip-avatar">B</div>
                      )}
                      <span className="meeting-pip-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>Bhishan Bogati (You)</span>
                        {isMicOn && !hasMediaError ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '10px' }}>
                            {Array.from({ length: 5 }).map((_, i) => {
                              const isActive = isMicOn && micVolume > (i * 15);
                              return (
                                <div 
                                  key={i} 
                                  className="volume-bar" 
                                  style={{
                                    width: '2px',
                                    height: `${isActive ? 4 + i * 2 : 3}px`,
                                    backgroundColor: isActive ? 'var(--success)' : 'rgba(255, 255, 255, 0.4)',
                                    borderRadius: '1px',
                                    transition: 'all 0.05s ease'
                                  }}
                                />
                              );
                            })}
                          </div>
                        ) : (
                          <span style={{ color: 'var(--danger)', fontSize: '9px' }}>{hasMediaError ? '⚠️ Error' : '🔇'}</span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Meeting Bottom Toolbar */}
                  <div className="meeting-toolbar">
                    <button 
                      type="button" 
                      className={`btn-meeting-action ${isMicOn ? 'active-green' : 'inactive-red'}`}
                      onClick={() => setIsMicOn(!isMicOn)}
                      title={isMicOn ? "Mute Mic" : "Unmute Mic"}
                    >
                      {isMicOn ? <MicIcon /> : <MicOffIcon />}
                    </button>
                    <button 
                      type="button" 
                      className={`btn-meeting-action ${isCamOn ? 'active-green' : 'inactive-red'}`}
                      onClick={() => setIsCamOn(!isCamOn)}
                      title={isCamOn ? "Stop Video" : "Start Video"}
                    >
                      {isCamOn ? <VideoIcon /> : <VideoOffIcon />}
                    </button>
                    <button 
                      type="button" 
                      className={`btn-meeting-action ${isScreenShared ? 'active-green' : 'inactive-red'}`}
                      onClick={() => setIsScreenShared(!isScreenShared)}
                      title={isScreenShared ? "Stop Screen Share" : "Share Screen"}
                    >
                      <ShareScreenIcon />
                    </button>
                    <button 
                      type="button" 
                      className={`btn-meeting-action ${isFullscreen ? 'active-green' : 'inactive-red'}`}
                      onClick={toggleFullscreen}
                      title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Meeting"}
                    >
                      {isFullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
                    </button>
                    <button 
                      type="button" 
                      className="btn-meeting-leave"
                      onClick={() => {
                        setActiveMeeting(false);
                        setIsScreenShared(false);
                        setMeetingViewIndex(1);
                        if (document.fullscreenElement) {
                          document.exitFullscreen().catch(() => {});
                        }
                      }}
                      title="Leave Class"
                    >
                      <PhoneOffIcon />
                      <span>Leave Class</span>
                    </button>
                  </div>
                </div>

                {/* Sidebar Chat Box */}
                <div className="meeting-chat-sidebar">
                  <div className="meeting-chat-header">
                    <span>Chat Room</span>
                  </div>
                  
                  <div className="meeting-chat-messages">
                    {chatMessages.map((msg, i) => (
                      msg.isSystem ? (
                        <div key={i} className="chat-system-message" style={{
                          textAlign: 'center',
                          fontSize: '11px',
                          color: 'var(--text-secondary)',
                          margin: '8px 0',
                          padding: '6px 10px',
                          backgroundColor: 'rgba(0, 0, 0, 0.03)',
                          borderRadius: '8px',
                          display: 'block',
                          width: '100%',
                          boxSizing: 'border-box',
                          border: '1px solid var(--border-card)'
                        }}>
                          {msg.text}
                        </div>
                      ) : (
                        <div key={i} className={`chat-message-bubble ${msg.self ? 'self' : ''}`}>
                          <span className={`chat-sender ${msg.self ? 'self' : ''}`}>{msg.sender}</span>
                          <span className="chat-text">{msg.text}</span>
                          <span className="chat-time">{msg.time}</span>
                        </div>
                      )
                    ))}
                  </div>

                  <form onSubmit={handleSendChatMessage} className="meeting-chat-input-bar">
                    <input 
                      type="text" 
                      className="meeting-chat-input"
                      placeholder="Type a message..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                    />
                    <button type="submit" className="btn-meeting-send" title="Send Message">
                      <SendIcon />
                    </button>
                  </form>
                </div>
              </section>
            ) : meetingEnded ? (
              /* Meeting Ended Screen */
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '480px',
                padding: '48px 24px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06))',
                  border: '2px solid rgba(239,68,68,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  marginBottom: '24px'
                }}>
                  🏁
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Class Has Ended
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: 1.6, marginBottom: '8px' }}>
                  The <strong>ORIENTATION — Introductory Class</strong> session with Milan Aryal has concluded.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '36px' }}>
                  Session time: <strong>10:30 AM – 11:00 AM (Nepal Time)</strong>
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setMeetingEnded(false);
                      setShowLobby(false);
                    }}
                    style={{
                      background: 'var(--primary)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px 28px',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(99, 102, 241, 0.25)'
                    }}
                  >
                    Back to Schedule
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMeetingEnded(false);
                      setShowLobby(false);
                      setActiveMenu('classroom');
                    }}
                    style={{
                      background: 'transparent',
                      color: 'var(--primary)',
                      border: '1.5px solid var(--primary)',
                      borderRadius: '10px',
                      padding: '12px 28px',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Go to My Classroom
                  </button>
                </div>
              </div>
            ) : showLobby ? (
              <div className="section-card" style={{ maxWidth: '600px', margin: '40px auto', padding: '32px', textAlign: 'center', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: '#fff', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
                  <button 
                    type="button" 
                    className="classroom-back-btn" 
                    onClick={() => setShowLobby(false)}
                    style={{ background: 'none', border: 'none', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: 600, padding: 0 }}
                  >
                    <ArrowLeftIcon />
                    <span>Back to Schedule</span>
                  </button>
                </div>

                <div style={{ margin: '24px 0' }}>
                  <span style={{ 
                    fontSize: '11px', 
                    background: 'rgba(245, 158, 11, 0.1)', 
                    color: 'var(--warning)', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Classroom Lobby
                  </span>
                  
                  <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '16px', marginBottom: '8px' }}>
                    Introductory Class
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 auto 32px', maxWidth: '400px' }}>
                    CERT IV in Ageing Support (ORIENTATION). The live session with Milan Aryal will begin shortly.
                  </p>
                  
                  {/* Countdown Box */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
                    {/* Hours */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        background: 'rgba(0, 0, 0, 0.02)', 
                        border: '1px solid var(--border-card)', 
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'var(--text-primary)'
                      }}>
                        {String(Math.floor(timeLeft / 3600000)).padStart(2, '0')}
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '600' }}>Hours</span>
                    </div>

                    <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--border-card)', alignSelf: 'center', marginTop: '-20px' }}>:</div>

                    {/* Minutes */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        background: 'rgba(0, 0, 0, 0.02)', 
                        border: '1px solid var(--border-card)', 
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'var(--text-primary)'
                      }}>
                        {String(Math.floor((timeLeft % 3600000) / 60000)).padStart(2, '0')}
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '600' }}>Minutes</span>
                    </div>

                    <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--border-card)', alignSelf: 'center', marginTop: '-20px' }}>:</div>

                    {/* Seconds */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        background: 'rgba(0, 0, 0, 0.02)', 
                        border: '1px solid var(--border-card)', 
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'var(--text-primary)'
                      }}>
                        {String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0')}
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: '600' }}>Seconds</span>
                    </div>
                  </div>

                  {/* Status Note */}
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    background: 'rgba(0, 0, 0, 0.01)', 
                    border: '1px solid var(--border-card)', 
                    padding: '10px 18px', 
                    borderRadius: '30px',
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    marginBottom: '24px'
                  }}>
                    {timeLeft > 0 ? (
                      <>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--warning)', display: 'inline-block', animation: 'pulse-warning 1.5s infinite' }}></span>
                        Waiting for class to unlock at 10:30 AM Nepal Time...
                      </>
                    ) : (
                      <>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'inline-block', animation: 'pulse-success 1.5s infinite' }}></span>
                        Class is active and ready to join!
                      </>
                    )}
                  </div>

                  {/* Action Button */}
                  <div>
                    {timeLeft > 0 ? (
                      <button 
                        type="button" 
                        disabled
                        style={{
                          background: 'rgba(0,0,0,0.04)',
                          color: 'var(--text-muted)',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '12px 32px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'not-allowed'
                        }}
                      >
                        Enter Classroom Locked
                      </button>
                    ) : (
                      <button 
                        type="button" 
                        onClick={() => {
                          setActiveMeeting(true);
                          setMeetingViewIndex(1);
                          setShowLobby(false);
                        }}
                        style={{
                          background: 'var(--primary)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '12px 32px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
                          animation: 'pulse-primary 2s infinite'
                        }}
                      >
                        Join Class Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <section className="section-card">
                <h2 className="section-title">Today's Live Lectures</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 20 }}>
                  Weekly class planner for Cert IV Ageing Support study groups.
                </p>

                <div className="schedule-timeline">
                  {mockSchedule.map((sched) => (
                    <div 
                      key={sched.id} 
                      className="schedule-item" 
                      onClick={() => {
                        if (timeLeft > 0) {
                          setShowLobby(true);
                        } else {
                          setActiveMeeting(true);
                          setMeetingViewIndex(1);
                        }
                      }}
                      style={{ cursor: 'pointer', borderLeft: '4px solid var(--primary)' }}
                      title={timeLeft > 0 ? "Classroom opens at 10:30 AM" : "Click to Join Live Meeting Class"}
                    >
                      <div className="schedule-time-box">
                        <span className="schedule-time-hour">10:30</span>
                        <span className="schedule-time-ampm">AM</span>
                      </div>
                      <div className="schedule-details">
                        <span className="schedule-course-title">{sched.courseCode}</span>
                        <span className="schedule-subject">{sched.subject}</span>
                        <span className="schedule-location">📍 {sched.location}</span>
                        {timeLeft > 0 ? (
                          <span style={{ fontSize: 11, color: 'var(--warning)', marginTop: 8, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--warning)', display: 'inline-block', animation: 'pulse-warning 1.5s infinite' }}></span>
                            Starts in {getCountdownString()}. Click to enter lobby.
                          </span>
                        ) : (
                          <span style={{ fontSize: 11, color: 'var(--primary)', marginTop: 8, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'inline-block', animation: 'pulse-success 1.5s infinite' }}></span>
                            Class is live now. Click here to join meeting.
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          )}

          {/* Tab Content 4: Student Profile */}
          {activeMenu === 'profile' && (
            <section className="section-card">
              <h2 className="section-title">Qualification Profile</h2>
              
              {/* Student Badge Card */}
              <div className="profile-id-card">
                <div className="profile-id-avatar">B</div>
                <div className="profile-id-details">
                  <span className="profile-id-name">Bhishan Bogati</span>
                  <span className="profile-id-meta">Email: bhishan@kta.com.np</span>
                  <span className="profile-id-meta">Active enrollment: **CHC43015 Certificate IV in Ageing Support**</span>
                  <span className="profile-id-num">STUDENT ID: KTS-2026-8942</span>
                </div>
              </div>

              {/* Progress Card */}
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>
                Overall Qualification Progress
              </h3>

              <div className="progress-container" style={{ maxWidth: 600, marginBottom: 32 }}>
                <div className="progress-header">
                  <span>Completed Units of Competency</span>
                  <span>{programPercent}%</span>
                </div>
                <div className="progress-track" style={{ height: 12 }}>
                  <div className="progress-bar-fill" style={{ width: `${programPercent}%` }}></div>
                </div>
              </div>

              <div className="section-card" style={{ backgroundColor: 'var(--input-bg)', borderStyle: 'dashed' }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                  Practical Work Placement Requirement
                </h4>
                <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  The Certificate IV in Ageing Support (CHC43015) requires students to log a minimum of **120 hours** 
                  of work placement in an approved aged care facility. 
                  <br />
                  <strong style={{ color: 'var(--accent)' }}>Placement Status: Not Started (Pending Core Units Completion)</strong>
                </p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
