# MapTales - Community Owned, Location placed, Intangible culture mapping of indegenious communities

## Background


The places where we live are marked by distinctive characteristics (Taylor and Ken, 2013). These are tangible, as in the physical patterns and components of our surroundings, and intangible, as in the symbolic meanings and values we attach to places, and also to objects and traditional ways of expression, as in language, art, song, dance, and so on (Taylor and Ken, 2013). Cultural mapping is a mode of inquiry and a methodological tool that aims to make visible the ways local stories, practices, relationships, memories, and rituals constitute places as meaningful locations (Duxbury and Redaelli, 2024).


The intangible cultural heritage constitutes a set of living and constantly recreated practices, knowledge, and representations enabling individuals and communities, at all levels, to express their world conception through systems of values and ethical standards (Taylor and Ken, 2013). Intangible cultural heritage creates among communities a sense of belonging and continuity and is therefore considered as one of the mainsprings of creativity and cultural creation (Taylor and Ken, 2013). In a 2003 report for UNESCO, Peter Poole pointed out that for Indigenous peoples, mapping has become a tool for recovering control of lost territory, negotiating access rights to traditional resources, or defending recognized territories against indiscriminate resource extraction (Duxbury, William, and David, 2015). It is these places with their identity and meaning that give rise to the local distinctiveness and sense of place of indigenous and local communities (Taylor and Ken, 2013). While ICT has been constantly evolving, breaking all imaginable barriers, the questions of access—who has access to knowledge creation, exchanging and learning from cultural tradition, and literary access—remain a  challenge. 


Internet and technology access is not all equal and is still inaccessible to 33% of the world population (DaRePo). The affordability of internet access for those with connectivity raises questions about the true quality of their internet access. Community wireless networks are bottom-up projects in which communities use affordable wireless networks such as WiFi-based mesh and other technologies to set up communications infrastructures for themselves, often in locations where mobile coverage is lacking or costs are prohibitively high (Lorini et al. 2018). Management of local and indigenous knowledge, especially culturally sensitive and unique knowledge, implies a need for gathering existing information, resources, and processes to store and distribute the collected data (Lorini et al. 2018). 

Mattern (2015) characterizes maps as more than mere landscapes; they represent to be simply texts to be read, rather as rhetorical and political. Mattern (2015) argues that maps as media are distributed among myriad “users” in particular ways; they’re accessed, “processed” (do we still “read” maps?) and interpreted by those users in different ways. Mattern (2015) questions the very existence and values of the large-scale media-production industry with the critical question of who historically has owned the means of describing the space, and what have been their interests? Recognizing maps as media potentially opens up a more expansive understanding of how they operate (Mattern 2015).

Jeppesen and Sartoretto (2023) define hegemonic maps as “visual representations produced by dominant institutions that often reflect Western frameworks and can have a negative impact on public discourse and social justice initiatives.” Countering the data narratives of hegemonic maps, community-produced maps can resist dominant representations of the pandemic, providing greater visibility, specificity, and nuance regarding the communities and territories mapped (Jeppesen and Sartoretto. 2023). Conjoining data and mapping, we define counter‐data mapping as practices that integrate resistant data appropriations into counter‐mapping processes, with the objective of challenging power asymmetries (Jeppesen and Sartoretto 2023). 



## Methodological Approach


Technology is an enduring presence in contemporary society. The critical issue is one of ownership, knowledge, and exchange, particularly how technology can facilitate the preservation and sharing of cultural knowledge by marginalized indigenous communities without exacerbating their marginalization. This project investigates the convergence of maps, community-owned technologies and networks, and intangible cultural heritage, proposing this intersection as a model for cultural preservation and a means of generating counter-data narratives.

Oral history is a crucial component of intangible cultural heritage, as noted by Taylor and Ken (2013). However, with the standardization of education in educational institutions, the recognition, and need for oral cultural heritage are degrading. My lived experiences highlight the tension between older generations wanting to share historical knowledge while also not wanting the younger generation to face the same struggles they did. As Taylor and Ken (2013) emphasize, cultural heritage is also a sensitive issue.


As a researcher, I am exploring the integration of intangible cultural heritage with community-owned technologies to preserve this heritage through intergenerational co-creation. This approach aims to address critical questions concerning the financial burden of technology and internet access, encouraging communities to focus on cultural preservation without sacrificing future aspirations. Simultaneously, it leverages data to create counter-narratives that challenge dominant voices.


## Technological Framework

The application is designed as a static website, capable of being hosted on platforms ranging from a compact Raspberry Pi to a cloud-based server or code hosting repositories such as GitHub. The developed technology assumes the availability of [OSMTracker](https://wiki.openstreetmap.org/wiki/OSMTracker_(Android)), installed on mobile phones. OSMTracker enables users to generate a location trace, known as a GPX file, which can incorporate various forms of hypermedia, including text, images, audio, and videos. Users can open the application on their phones, traverse any path (with no distance limitations), and record or annotate different types of hypermedia.

Once the trace is generated, users can export the GPX file from OSMTracker to the application, allowing the generated trace and all recorded hypermedia to be visualized. A critical component of this approach is that not every community member requires a mobile phone, and internet access is not necessary for recording, copying, or accessing the trace.

## Current Limitations

1. The project currently lacks documentation on the standards to be employed and the approach to be taken.
2. There is no documentation on how to copy the exported file to the correct path and write the metadata.
3. The size of the archive is constrained by the storage capacity of the deployed server.
4. The project assumes the availability of a WiFi router and a server, without providing documentation on their deployment.
5. The project was developed solely as a demonstration to visualize potential impact and is not yet ready for real-world application.


## Demo

A simple showcase demo is available here : [Demo Site](http://blog.voidspace.xyz/maptales/)


## Reference

Duxbury, Nancy , Redaelli, Eleonora "Cultural Mapping". In obo in Communication, https://www.oxfordbibliographies.com/view/document/obo-9780199756841/obo-9780199756841-0249.xml (accessed 6 Dec. 2024).

Taylor, Ken. 2013. “Cultural Mapping: Intangible Values and Engaging with Communities with Some Reference to Asia.” The Historic Environment: Policy &amp; Practice 4 (1): 50–61. doi:10.1179/1756750513Z.00000000024.

Duxbury, Nancy, William Francis Garrett-Petts, and David MacLennan. "Cultural mapping as cultural inquiry: Introduction to an emerging field of practice." Cultural mapping as cultural inquiry (2015): 1-42.

Lorini, Maria Rosa, Melissa Densmore, David Johnson, Senka Hadzic, Hafeni Mthoko, Ganief Manuel, Marius Waries, and André van Zyl. "Localize-it: Co-designing a community-owned platform." In International Development Informatics Association Conference, pp. 243-257. Cham: Springer International Publishing, 2018.

Jeppesen, Sandra, and Paola Sartoretto. 2023. “Cartographies of Resistance: Counter-Data Mapping as the New Frontier of Digital Media Activism.” Media and Communication 11 (1): 150–62. https://doi.org/10.17645/mac.v11i1.6043.

Mattern, S. (2015) Gaps in the Map: Why We’re Mapping Everything, and Why Not Everything Can, or Should, be Mapped.  https://wordsinspace.net/shannon/2015/09/18/gaps-in-the-map-why-were-mapping-everything-and-why-not-everything-can-or-should-be-mapped/
    
“DaRePo.” n.d. https://datareportal.com/global-digital-overview. Accessed October 26, 2024. 


## License

The code in the repository is licensed under **AGPL**. The data was borrowed from (FollowTheSheep)[https://open.janastu.org/projects/follow-the-sheep] tracker project developed by Janastu, an NGO based in Karnataka, India, where I currently volunteer as a software engineer. The data was intended to be public but has not been published, but has been used here with permission, ensuring the demo tracks contain no PII or human identification of any sort. Any other use of the data in the repository should thus only be done, with written permission from Janastu and can be contacted through team@servelots.com.


## Acknowledgements 

This project was doable thanks to the following projects available in their own respective licenses.

| Library | Link | License |
| ---- | ---- | ----|
|LeafLet | https://leafletjs.com/ | BSD 2-Clause and BSD 3-Clause |
|LeafLet GPX | https://github.com/mpetazzoni/leaflet-gpx/ | BSD 2-Clause and BSD 3-Clause |
|Font Awesome Icons | https://fontawesome.com/ |  SIL OFL 1.1 |
|LeafLet Awesome Icons | https://github.com/lennardv2/Leaflet.awesome-markers | MIT License |



