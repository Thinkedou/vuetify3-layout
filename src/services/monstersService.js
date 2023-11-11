import { axiosClient } from "./axiosClient";

// ensuite il est d'usage d'avoir un fichier de service par entité
// session, promos, users etc.

const NAMESPACE = 'monsters'

// par défaut le token sera ajouté
export async function getAllMonsters() {
  return await axiosClient.get(NAMESPACE);
}

// ici un test avec une route pas protégé, le token ne sera pas mis
export function getOneMonster({ mId }) {
  return axiosClient.get(
    `${NAMESPACE}/${mId}`,
    { authorization: false }
  );
}

// export function login({ email, password }) {
//     return client.post(
//       "auth/login",
//       { email, password },
//       { authorization: false }
//     );
//   }

