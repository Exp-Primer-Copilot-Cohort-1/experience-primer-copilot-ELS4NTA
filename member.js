function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 34,
        skills: ['JS', 'PHP', 'HTML', 'CSS']
    };

    var skills = member.skills;

    for (var i = 0; i < skills.length; i++) {
        console.log(skills[i]);
    }
}