/**
 * Created by david.moore on 7/14/2016.
 */
eventsApp.factory('eventData', function(){
    return{
        event:{
            name: 'Angular Boot Camp',
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                }
                ,
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'tHIS SESSION WILL TAKE A CLOSER LOOK AT SCOPES. lEAN WHAT THEY DO, how they do it, and how to get them to do it for you. b',
                    upVoteCount: 0
                }
                ,
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'IControllers are the beginning of everything Angular does...',
                    upVoteCount: 0
                }
            ]
        }
    };
});