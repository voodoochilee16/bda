export async function load({ fetch, params}) {
    const res = await fetch ("https://cms.bluedesignalliance.pt/items/escolas");
    const schools = await res.json();
    return {schools}
} 

