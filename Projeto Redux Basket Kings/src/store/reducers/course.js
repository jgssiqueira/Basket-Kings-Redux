const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Starting With React",
      lessons: [
        { id: 1, title: "First Class" },
        { id: 2, title: "Second Class" },
      ],
    },
    {
      id: 2,
      title: "Learning Redux",
      lessons: [
        { id: 3, title: "Third Class" },
        { id: 4, title: "Fourth Class" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
