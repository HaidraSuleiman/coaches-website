export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        const token = context.rootGetters.token;
        const response = await fetch(`https://vue-coach-project-3ee5c-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        //  const responseData = await response.json();

        if (!response.ok) {
           //error ...
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context) {
        const response = await fetch('https://vue-coach-project-3ee5c-default-rtdb.firebaseio.com/coaches.json');
        //  console.log('first step');
        const responseData = await response.json();
        // console.log('second step');
        if (!response.ok) {
            const error = new Error(responseData.message || 'something went wrong!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            coaches.push(coach);
        }

        // console.log('third step');
        context.commit('setCoaches', coaches);
        // console.log('fourth step');
    }

};