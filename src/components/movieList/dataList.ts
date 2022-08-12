export type Movie = Readonly<{
    previewLink: string,
    rating: number,
    filmName: string,
    genre?: string,
}>;

export const movieLists: Movie[] = [
    {
        previewLink: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUBqk1kVoBJpFzZRwtLTds-wGSZTGqHoy__0aj7Eq740Lw50abtIYmYBYlBy8MqKrmcOBu6ytfhC9wrgyL9DZChpWRTzGeLfgHTGIMk-w-Zj6bP4egyO7f_oN1tz1icM_XCtSIZgjO_GOgsN1E8fkK38gK79Wp-x7Vo8ez_a70IipB-QF4aeotcm-f7xJMI.jpg?r=42a",
        rating: 9.9,
        filmName: "Stranger Things",
        genre: "Horror"
    },
    {
        previewLink: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYW-3Um3ftaifFFYhPfwt6-wEUBUeNM3uPXoMYkVNnlz00KgxewVY68yenoTPBlRI-iha-ngXqtkHxb_TVGRmqmFBcTyq9p0A35F63OnWCUKCaVmO3LXeG3tbvSt9McFiKYt.jpg?r=f9b",
        rating: 9.8,
        filmName: "Squid Game",
        genre: "Drama"
    },
    {
        previewLink: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbBy390a_Y5-g635CLj8k9Y8ARWHyKPeCn2kebApSqZPNzBskX7ktrlQvSqdosTyubdM5yA8Xzx3CcYOczgeS50G9oN2rQPDPgQ.webp?r=33d",
        rating: 9.7,
        filmName: "Rick and Morty",
        genre: "Absurd"
    },
    {
        previewLink: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSCWa_4-JgRU-rxSGX2S-yUoqg7Krb1NvNZ6iyQXDQJ1GwwxkdjMZ_Y6uuJOMXu__q6STT3OTxzimiQX1dyNURZqJDxLtQAU5jk.webp?r=24d",
        rating: 9.6,
        filmName: "The big bang theory",
        genre: "Sitcoms"
    },
    {
        previewLink: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS9gsnI3z3-sLc_pMwiG67_o9CKVqThfp1k51BbP_wBp1Fe6-LJedC_0VA17h-4CjIvI9OcPXI3oe9V_0638CoN0l3OEPHHv6xg.webp?r=4fc",
        rating: 9.5,
        filmName: "The office",
        genre: "Sitcoms"
    }
];
