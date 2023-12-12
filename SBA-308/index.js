// =====================
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
// =====================

// Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
// {
  // the ID of the learner for which this data has been collected
  // "id": number,
  // the learner’s total, weighted average, in which assignments
  // with more points_possible should be counted for more
  // e.g. a learner with 50/100 on one assignment and 190/200 on another
  // would have a weighted average score of 240/300 = 80%.
  // "avg": number,
  // each assignment should have a key with its ID,
  // and the value associated with it should be the percentage that
  // the learner scored on the assignment (submission.score / points_possible)
  // <assignment_id>: number,
  // if an assignment is not yet due, it should not be included in either
  // the average or the keyed dictionary of scores
// }


const now = new Date();

//remove future due date from all learner info object
const assignmentsDue = [];
const validAssignments = [];
for (const i in AssignmentGroup.assignments) {
  if (Object.hasOwnProperty.call(AssignmentGroup.assignments, i)) {
    const element = AssignmentGroup.assignments[i];
    if ( new Date( AssignmentGroup.assignments[i].due_at ) < now ) {
      assignmentsDue.push( AssignmentGroup.assignments[i] );
      validAssignments.push( AssignmentGroup.assignments[i].id )
    }
  }
}

const users = [];
const allLearnerInfo = [];

function getUsersIdAndLearnerInfo() {
  for ( const i in LearnerSubmissions ) {
    if ( LearnerSubmissions.hasOwnProperty.call( LearnerSubmissions, i )) {
      if ( !users.includes( LearnerSubmissions[i].learner_id ) ) {
        users.push( LearnerSubmissions[i].learner_id );
      }

      allLearnerInfo.push( {
        "learner_id": LearnerSubmissions[i].learner_id,
        "assignment_id": LearnerSubmissions[i].assignment_id,
        "score": LearnerSubmissions[i].submission.score,
      } );
    }
  }
}
getUsersIdAndLearnerInfo();

const newAllLearnerInfo = [];
allLearnerInfo.forEach( (el, i ) => {
  if ( validAssignments.includes( el.assignment_id ) ) {
    newAllLearnerInfo.push( el );
  }
});

let pointsPossible = 0;
AssignmentGroup.assignments.map( (x) => { 
  if ( validAssignments.includes( x.id ) ){
    pointsPossible = pointsPossible + x.points_possible;
  }
});


function userFinalResults( user ) {
  console.log( user );
  let totalPoints = 0;
  let weightedAverage;
  newAllLearnerInfo.forEach( el => {
    if ( user === el.learner_id ) {
      let asssignmentId = el.assignment_id;
      totalPoints = totalPoints + el.score;
      user = el.learner_id;
      weightedAverage = totalPoints / pointsPossible * 100;
    }
  });
   return {
    user: user,
    totalPoints: totalPoints,
    weightedAverage: weightedAverage,
  };
}

users.forEach( el => {
  console.log( 'final 23 23 23 ->', userFinalResults( el ) );
});