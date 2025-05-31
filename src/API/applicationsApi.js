export const myApplicationsPromise = (email, uid) => {
  return fetch(
    `http://localhost:3000/applications?applicantUID=${uid}&applicantEmail=${email}`
  );
};
