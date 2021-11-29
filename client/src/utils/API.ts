// --------------------- Not working -------------------------
// Route that will get user info 
export const getUser = (authToken: JSON) => {
    return fetch("/api/users/me", {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${authToken}`,
        },
    });
}

// Route that will add a car to your garage 
export const saveCar = (userId: string, carData: [string], authToken: JSON) => {
    return fetch('/api/cars', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(userId, carData),
    });
};

// Route that will update a car in your garage 
export const updateCar = (userId: string, carData: [string], carID: string, authToken: JSON) => {
    return fetch('/api/cars', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(userId, carData, carID),
    });
};


