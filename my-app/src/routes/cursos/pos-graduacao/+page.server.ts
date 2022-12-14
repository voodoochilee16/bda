export async function load ({fetch, params}) {
    const res = await fetch("https://cms.bluedesignalliance.pt/items/Courses?fields=*.*")
    const pgz = await res.json()
    return {pgz}
};



