import {isLoading} from "../../../../store";
export async function load({params}) {
    try {
        isLoading.set(true);
        const response = await fetch(`https://api.grubfinder.io/session/${params.slug}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok)
            console.log(`Successfully retrieved session with id: ${params.slug}`);
        else
            console.log('Error: Getting session failed');

        const responseBody = await response.json();

        const voteCount = responseBody;

        if (voteCount) {
            isLoading.set(false);
            return voteCount;
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
}