export const getCoins = async ({coin}) => {
    
           try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${coin}&x_cg_demo_api_key=CG-RLJKywJDuCV5J4vpF6vQtao5`);
            if (!res.ok) {
                throw new Error('error en la respuesta del servidor:', res.status);
            }
            const json = await res.json();
            return json
        } catch (error) {
            return { error };
        }
    }

