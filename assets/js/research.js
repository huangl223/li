/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Combining Tests and Proofs for Better Software Verification",
    authors:
      "Li Huang, Bertrand Meyer and Manuel Oriol",
    conferences:
      "Communications of the ACM",
    researchYr: 2026,
    image: "assets/images/research-page/combining_proofs_and_tests.png",
    paperurl:
      "https://www.arxiv.org/pdf/2601.16239",
    abstract:
      "https://www.arxiv.org/pdf/2601.16239",
    absbox: "absPopup1",
  },

  {
    title: "Lessons from Formally Verified Deployed Software Systems",
    authors:
      "Li Huang, Sophie Ebersold, Alexander Kogtenkov, Bertrand Meyer, Yinling Liu",
    conferences:
      "ACM Computing Surveys (CSUR)",
    researchYr: 2026,
    citebox: "popup2",
    image: "assets/images/research-page/deployed_verified_systems.png",
    paperurl:
      "https://dl.acm.org/doi/10.1145/3785652",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Loop Unrolling: Formal Definition and Application to Testing",
    authors: "Li Huang, Bertrand Meyer and Reto Weber",
    conferences:
      "IFIP International Conference on Testing Software and Systems",
    researchYr: 2025,
    image: "assets/images/research-page/loop_unrolling.png",
    paperurl:
      "https://link.springer.com/chapter/10.1007/978-3-032-05188-2_2",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title:
      "Seeding Contradiction: a Fast Method for Generating Full-Coverage Test Suites",
    authors:
      "Li Huang, Bertrand Meyer, Manuel Oriol",
    conferences:
      "Springer Nature Computer Science",
    researchYr: 2025,
    citebox: "popup4",
    image: "assets/images/research-page/seeding_contradiction.png",
    paperurl:
      "https://link.springer.com/article/10.1007/s42979-024-03482-0",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "Is MCDC Really Better? Lessons from Combining Tests and Proofs",
    authors:
      "Li Huang, Bertrand Meyer, Manuel Oriol",
    conferences:
      "International Conference on Tests and Proofs",
    researchYr: 2024,
    citebox: "popup5",
    image: "assets/images/research-page/mcdc_branch.png",
    paperurl:
      "https://link.springer.com/chapter/10.1007/978-3-031-72044-4_2",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },


  {
    title: "Execution-Free Program Repair",
    authors: "Li Huang, Bertrand Meyer, Ilgiz Mustafin, Manuel Oriol",
    conferences:
      "International Conference on the Foundations of Software Engineering - Idea, Vision and Relecftion track (FSE-IVR)",
    researchYr: 2024,
    citebox: "popup6",
    image: "assets/images/research-page/proof2fix.png",
    paperurl:
      "https://dl.acm.org/doi/10.1145/3663529.3663789",
    absbox: "absPopup6",
  },

  {
    title:
      "A Failed Proof Can Yield a Useful Test",
    authors: "Li Huang, Bertrand Meyer.",
    conferences:
      "Software Testing, Verification and Reliability (STVR)",
    researchYr: 2023,
    citebox: "popup7",
    image: "assets/images/research-page/proof2test.png",
    paperurl:
      "https://onlinelibrary.wiley.com/doi/full/10.1002/stvr.1859",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },

  {
    title:
      "Improving Counterexample Quality from Failed Program Verification",
    authors:
      "Li Huang, Bertrand Meyer and Manuel Oriol",
    conferences:
      "IEEE International Symposium on Software Reliability Engineering Workshops (ISSREW)",
    researchYr: 2022,
    citebox: "popup8",
    image: "assets/images/research-page/counterexample.png",
    paperurl:
      "https://ieeexplore.ieee.org/abstract/document/9985046/",
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      paperurl
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${paperurl}" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    </div>
                  
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
