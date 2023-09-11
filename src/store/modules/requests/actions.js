export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };
        const response = await fetch(`https://vue-coach-project-3ee5c-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });
         const responseData = await response.json();

         if (!response.ok) {
         const error = new Error(responseData.message || 'Failed to send Request!');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;


        context.commit('addRequest', newRequest);
    }, 
    async fetchRequests(context){
        const coachId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://vue-coach-project-3ee5c-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token);
        const responseData = await response.json();

        if (!response.ok){
            const error = new Error(responseData.message || 'Faild to laod requests');
            throw error;
        }

        // console.log(responseData);
         const requests = [];
         for (const key in responseData){
            const request ={
                coachId: coachId,
                message: responseData[key].message,
                id: key,
                userEmail:responseData[key].userEmail
            }
            requests.push(request);
         }
         context.commit('setRequests', requests);

    }
}