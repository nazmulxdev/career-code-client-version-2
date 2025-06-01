export const myApplicationsPromise = (email, uid) => {
  return fetch(
    `https://career-code-server-version-2.vercel.app/applications?applicantUID=${uid}&applicantEmail=${email}`,
  );
};
