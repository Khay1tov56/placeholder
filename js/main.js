let elList = document.querySelector(".list");
let elTemplate = document.querySelector(".template").content;
let newFragment = document.createDocumentFragment();

async function list() {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await res.json()
        data.forEach(element => {
            elList.innerHTML = "";
            let templateClone = elTemplate.cloneNode(true);
            templateClone.querySelector(".item").dataset.id = element.id;
            templateClone.querySelector(".morebtn").dataset.id = element.id;
            templateClone.querySelector(".username").textContent = element.username;
            templateClone.querySelector(".idcompany").textContent = element.id;
            templateClone.querySelector(".title").textContent = element.name;
            templateClone.querySelector(".street").textContent = element.address.street;
            templateClone.querySelector(".suite").textContent = element.address.suite;
            templateClone.querySelector(".city").textContent = element.address.city;
            templateClone.querySelector(".zipcode").textContent = element.address.zipcode;
            templateClone.querySelector(".companyname").textContent = element.company.name;
            templateClone.querySelector(".catchPhrase").textContent = element.company.catchPhrase;
            templateClone.querySelector(".companybs").textContent = element.company.bs;
            templateClone.querySelector(".companytel").textContent = element.phone;
            templateClone.querySelector(".companytel").href = `tel:${element.phone}`;
            templateClone.querySelector(".map").href = `https://www.google.com/maps/place/${element.address.geo}`;
            templateClone.querySelector(".website").textContent = element.website;
            templateClone.querySelector(".website").href = `https${element.website}`;
            templateClone.querySelector(".mailtocompay").textContent = element.email;
            templateClone.querySelector(".mailtocompay").href = `mailto:${element.emai}`;

            // https://www.google.com/maps/place/-37.3159,81.1496


            newFragment.appendChild(templateClone);

            // console.log(element);
        })
        elList.appendChild(newFragment)
    } catch (error) {
        console.log(error);
    }
}
list()



let elUl2 = document.querySelector(".posts")
let elTemplate2 = document.querySelector(".template2").content;
let newFragment2 = document.createDocumentFragment();


async function showpost(arr) {
    try {
        const respon = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${arr}`)
        const data = await respon.json()

        data.forEach(post => {
            elUl2.innerHTML = "";
            let templateClone2 = elTemplate2.cloneNode(true);
            templateClone2.querySelector(".list2").dataset.id = post.id;
            templateClone2.querySelector(".idpost").textContent = post.id;
            templateClone2.querySelector(".posttitle").textContent = post.title;
            templateClone2.querySelector(".posttext").textContent = post.body;
            templateClone2.querySelector(".morebtn2").dataset.id = post.id;


            newFragment2.appendChild(templateClone2);
        })

        elUl2.appendChild(newFragment2);


        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

elList.addEventListener("click", function (evt) {
    elCommentList.innerHTML = " ";
    if (evt.target.matches(".morebtn")) {
        let aa = evt.target.dataset.id;
        console.log(aa);
        showpost(aa)
    }
})



let elCommentList = document.querySelector(".comments")
let elTemplate3 = document.querySelector(".commenttemplate").content;
let newFragment3 = document.createDocumentFragment();

async function comment(arr) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${arr}`)
        const data = await res.json();
        data.forEach(comment => {
            elCommentList.innerHTML = " ";
            let cloneFragment = elTemplate3.cloneNode(true);

            cloneFragment.querySelector(".comment").dataset.id = comment.postId;
            cloneFragment.querySelector(".commentpost").textContent = comment.id;
            cloneFragment.querySelector(".commenttitle").textContent = comment.name;
            cloneFragment.querySelector(".commenttext").textContent = comment.body;
            cloneFragment.querySelector(".mailto").textContent = comment.email;
            cloneFragment.querySelector(".mailto").href = comment.email;


            console.log(comment);

            newFragment3.appendChild(cloneFragment)
        })

        elCommentList.appendChild(newFragment3)
    } catch (error) {
        console.log(error);
    }
}


elUl2.addEventListener("click", function(evt) {
    if(evt.target.matches(".morebtn2")) {
        let bb = evt.target.dataset.id;
        comment(bb)
    }
})