export function getAppointmentsForDay(state, day) {
  let appointments = [];
  let appointmentIDs = [];
  for (let d of state.days) {
    if (d.name === day) {
      appointmentIDs = d.appointments
    }
  };

  for (let i of appointmentIDs) {
    appointments.push(state.appointments[i])
  };

  return appointments;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  };

  return {...interview, interviewer: state.interviewers[interview.interviewer]}
}