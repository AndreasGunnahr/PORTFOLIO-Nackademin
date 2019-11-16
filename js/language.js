const language = {
    'en' : {
        'contact': 'CONTACT ME',
        'about': 'About me',
        'skills' : 'Skills',
        'education' : 'Education',
        'about-text': 'Fullstack student with a long background from elite hockey who is passionate about new technology. Always been fascinated by problem solving and newly created, hence my interest in programming.',
        'degree-1' : 'Fullstack developer',
        'school-date-1': 'Nackademin -- 2019-2020',
        'degree-2' : 'MSc in Computer Science',
        'school-date-2': 'Royal Institute of Technology -- 2017-2019',
        'degree-3' : 'Board member',
        'school-date-3': 'KTH Hockey association -- 2018-2019',
        'CV': 'Download CV',
        'all': 'All',
        'quiz': 'Quiz Application',
        'crm': 'CRM Application',
        'soon': 'Coming soon',
        'talk': "Let's talk",
        'name': 'Your name',
        'email': 'Email',
        'subject': 'Subject',
        'message': 'Message',
        'submit': 'Send Message'

    },
    'sv' : {
        'contact': 'KONTAKTA MIG',
        'about': 'Om mig',
        'skills' : 'Kompetens',
        'education' : 'Utbildning',
        'about-text': `Fullstack student med lång bakgrund från elithockey som brinner för ny teknik. Alltid varit fascinerad av problemlösning och nyskapade, därmed mitt intresse för programmering. '<br></br>' För övrigt så är jag en kommunikativ, uppmuntrande lagspelare som gärna presenterar idéer och hjälper till om problem uppstår. Utöver teknik så har jag även ett brinnande intresse inom träning.`,
        'degree-1' : 'Fullstack utvecklare',
        'school-date-1': 'Nackademin -- 2019-2020',
        'degree-2' : 'Civilingenjör i datateknik',
        'school-date-2': 'Kungliga tekniska högskolan -- 2017-2019',
        'degree-3' : 'Styrelse medlem',
        'school-date-3': 'KTH Ishockey förening -- 2018-2019',
        'CV': 'Ladda ner CV',
        'all': 'Alla',
        'quiz': 'Quiz Applikation',
        'crm': 'CRM Applikation',
        'soon': 'Kommer snart',
        'talk': 'Kontakt',
        'name': 'Ditt namn',
        'email': 'E-post',
        'subject': 'Ämne',
        'message': 'Meddelande',
        'submit': 'Skicka meddelande'
    }
}

$(document).ready(function(){
    let prevLang = localStorage.getItem("settings");
    if(prevLang == "en"){
        $('.dropdown-toggle').text("English")
    }
    else if(prevLang == "sv"){
        $('.dropdown-toggle').text("Swedish")
    }
    $('.lang').each( function(index, element) {
        $(this).text(language[prevLang][$(this).attr('key')]);
    })
});



$(function() {
    $('.dropdown-item').click(function(){
        let lang = $(this).attr('id');
        $('.dropdown-toggle').text(($(this).text()))
        if(lang == localStorage.getItem("settings")){

        }else{
            localStorage.setItem("settings",lang)
            location.reload();
        }
    });
})
