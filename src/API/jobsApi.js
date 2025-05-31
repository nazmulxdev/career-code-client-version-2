export const jobsCreatedByPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/jobs/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
