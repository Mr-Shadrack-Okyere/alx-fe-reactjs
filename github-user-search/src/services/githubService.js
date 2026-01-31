import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};

import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  let query = `${username}`;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      per_page: 10,
    },
  });

  return response.data;
};

import axios from "axios";

export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  let query = username;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`;

  const response = await axios.get(url);
  return response.data;
};
