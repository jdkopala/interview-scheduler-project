import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  // State management object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  // This sets the chose day (state.day)
  const setDay = day => setState({ ...state, day });
  // API request to retrieve the data from the server to display
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
      .then((all) => {
        setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
      });
  }, []);

  // Use this function to update the state when an appointment is booked or cancelled
  const updateSpots = (state) => {
    // Check the index of the day currently selected in state, from the array of days in state
    const currentDayIndex = state.days.findIndex((day) => day.name === state.day);
    // Access the current day using the index
    const currentDay = state.days[currentDayIndex];
    // This variable will refer to how many spots are open on the current day
    const spots = currentDay.appointments.filter((id) => !state.appointments[id].interview).length;
    // Replace the spots in the state.days object that belongs to the current day
    const newDayObj = { ...currentDay, spots };
    // Create a new array of day objects for state
    const newDaysArr = [...state.days];
    // replace the current day object with the newly updated version (spots counted)
    newDaysArr[currentDayIndex] = newDayObj;

    return newDaysArr;
  }
  // This function saves an interview to the database and updates the spots remaining in the sidebar in the app
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`api/appointments/${id}`, appointments[id])
      .then(
        setState({ ...state, appointments })
      )
      .then(setState((prev) => {
        return { ...prev, days: updateSpots(prev) }
      }));
  };
  // This function removes an interview from the database and updates the spots remaining in the sidebar in the app
  async function cancelInterview(id) {
    await axios.delete(`api/appointments/${id}`)
    const appointments = {
      ...state.appointments,
      [id]: { ...state.appointments[id], interview: null }
    };
    setState((prev) => {
      return { ...prev, appointments }
    });
    setState((prev) => {
      return { ...prev, days: updateSpots(prev) }
    });
  };

  return { state, setDay, bookInterview, cancelInterview }
};

export default useApplicationData;