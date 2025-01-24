import axios from "axios";

const api = axios.create({
    baseURL: "https://raw.githubusercontent.com/"
});

export const getCoffee = () => {
    return api.get("devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
}