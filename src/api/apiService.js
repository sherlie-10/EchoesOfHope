// src/api/apiService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/contact';

export const fetchContacts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching contacts:', error);
        throw error;
    }
};

export const createContacts = async (projectData) => {
    try {
        const response = await axios.post(API_URL, ContactsData);
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
};

export const deleteContacts = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting contacts:', error);
        throw error;
    }
};
