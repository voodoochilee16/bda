export async function load({ fetch, params}) {
    const res = await fetch ("https://cms.bluedesignalliance.pt/items/cursos");
    const courses = await res.json();
    return {courses}
}