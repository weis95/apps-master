import _ from "lodash";

import users from "./users";



export const contains = ({ name, email }, query) => {

  const { first } = name;

  if (first.includes(query) || email.includes(query)) {

    return true;

  }



  return false;

};



export const getUsers = (limit = 5, query = "") => {

  return new Promise((resolve, reject) => {

    if (query.length === 0) {

      resolve(_.take(users, limit));

    } else {

      const formattedQuery = query.toLowerCase();

      const results = _.filter(users, user => {

        return contains(user, formattedQuery);

      });

      resolve(_.take(results, limit));

    }

  });

};



export default getUsers;