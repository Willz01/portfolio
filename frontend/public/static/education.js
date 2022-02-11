
class course {
  constructor(course_name, description, tags = [], course_code, credits, year) {
    this.course_name = course_name;
    this.description = description;
    this.tags = tags;
    this.course_code = course_code;
    this.credits = credits;
    this.year = year;
  }
}

let courses = [
  new course('Software Development for the Web', 'Frontend development with Javascript, HTML, CCS and other 3rd party frameworks. Backend development, APIs with NodeJS and express + database work.', ['nodeJS', 'expressJS', 'sqlite', 'API', 'Full Stack', 'Group work'], 'DA377C', 7.5, 2022),
  new course('Bachelor Thesis in Computer Science', 'Currently doing my thesis in <i>Identifying malicious nodes in Peer-to-Peer networks.</i>', ['thesis', 'P2P', 'Distributed networks', 'python'], 'DA399C', 15.0, 2022),
  new course('Entrepreneurship and Innovation', 'We worked in group of 3 members on a innovative project that followed a structured and formatted methodology.', ['Entrepreneurship', 'innovation', 'group innovation'], 'IE301C', 7.5, 2021),
  new course('Software Engineering 2', 'I led as a Project manager in a group of 15 students to develop and simulate a smart home evironment, with both web and mobile clients.', ['Smart-house', 'Agile Development', 'Network', 'Service and Resources', 'CI/CD', 'JAX/RS'], 'DA326C', 15.0, 2021),
  new course('Network Applications', 'Studies in Remote Method Innovation frameworks in Java, APIS , TCP and UCP networking.', ['RPC/RMI', 'API`s', 'TCP', 'UDP', 'Networking', 'Java', 'javascript'], 'DA374F', 7.5, 2021),
  new course('Software Engineering 1', 'We as a group development an android app, which makes it possible for people to sell back old/damaged electronics parts to state collectors.', ['Android', 'Agile Development', 'Testing'], 'DA216C', 7.5, 2021),
  new course('Computer Security', 'Cryptographic techniques, hashing, ensuring internet security with both public and private keys encryption. Certicate Authorities and digital signatures', ['encryption', 'decryption', 'public & private key cryptography', 'Java'], 'DA273B', 7.5, 2021),
  new course('Development towards Mobile Platforms', 'A group based course were we developed and android app for this first time. We developed Outdork, a mobile app that allows seaching for outdoor activities like hiking and fishing simpler', ['android', 'group work', 'kotlin', 'Java'], 'DA224C', 7.5, 2021),
  new course('Data Communication', 'Single and Multi threaded servers were studied under this course, HTTP, TCP, UDP and other internet communication protocols looked into.', ['TCP', 'Packets', 'Mutli-thread Servers', 'Java'], 'DA270B', 7.5, 2021),
  new course('Algorithms and Data Structures', 'Big-OH complexity, space complexity, complexity of different sorting algorithms. We had to make a lab project and report analysis of comparing different sorting algotithms.', ['sorting', 'algorithm comparison', 'Big-Oh', 'time & space complexity', 'Java', 'Reports'], 'DA256C', 7.5, 2020),
  new course('Digital Electronic System Design', 'Electronis system design with arduino and other electronic components. Required a project work were me and Sam(a classmate) built a security lock system.', ['arduino', 'wires'], 'DT223B', 7.5, 2020),
  new course('Discrete Mathematics', 'Covered algebra and other mathemcatical concepts applied in computer science.', ['algebra', 'matrix', 'Differentiation & Calculus'], 'MA252B', 7.5, 2020),
  new course('Operating Systems', 'Studied threading, asyn IO, deadlocks and lock & acquire labs with the ReentrantLock Java package.', ['Thread', 'File I/O', 'Deadlocks', 'Philosophers problem'], 'DT271C', 7.5, 2020),
  new course('Project Course 2', 'Mini group based course of 4 people working from distance. We developed a JavaFX Covid-19 logging application for logging results of tested people in hospitals/test centers.', ['Group work', 'Distance coding'], 'DA122C', 7.5, 2020),
  new course('Introductory Mathematics with Computer based Applications', 'Covered algebra and other mathemcatical concepts applied in computer science.', ['algebra', 'Differentiation & Calculus'], 'MA150C', 15.0, 2020),
  new course('Object Oriented Programming', 'Covered introductory programming and OOP concepts like Encapsulation. We used Github for the first time. Built GUI applications with JavaFX.', ['Java', 'JavaFx', 'Github', 'Classes'], 'DA114C', 7.5, 2020),
  new course('Database Technique', 'Database CRUD operations using the Java JDBC.', ['MySQL', 'nomalization'], 'DA113E', 7.5, 2019),
  new course('Project Course 1', 'First group based course, was quite interesting. We built <i>THE CLASSIC</i> Java console based hotel management application.', ['Java', 'Group work', 'Hotel Management application'], 'DA120C', 7.5, 2019),
  new course('Introduction to Computer Science', 'INTRO TO COMPUTER SCIENCE.', ['OS', 'Maths for computer science'], 'DA100C', 7.5, 2019),
  new course('Fundamental Programming', 'INTRO TO JAVA, PROGRAMMING.', ['Java', 'Ethics', 'Intro'], 'DA110E', 7.5, 2019)
]

const container = document.querySelector('.row')
container.classList.add('d-flex')
container.classList.add('m-1')
container.classList.add('justify-content-center')

function cardFlow() {

  for (const item of courses) {
    const course_container = document.createElement('div')
    course_container.classList.add('card')
    course_container.classList.add('col-md-5')
    course_container.classList.add('m-1')



    const h2 = document.createElement('h3')
    h2.classList.add('card-title')
    h2.classList.add('text-muted')
    h2.classList.add('ms-1')
    h2.classList.add('mt-3')
    h2.innerText = item.course_name

    const credits = document.createElement('div')
    credits.classList.add('card-header')
    credits.innerText = 'Credits: ' + item.credits + 'HP'

    const code = document.createElement('div')
    code.classList.add('card-footer')
    code.innerText = 'Course code: ' + item.course_code

    const year = document.createElement('div')
    year.classList.add('card-footer')
    year.innerText = 'Year: ' + item.year


    const body = document.createElement('div')
    body.classList.add('card-body')

    for (const tagText of item.tags) {
      const tag = document.createElement('span')
      tag.classList.add('badge')
      tag.classList.add(throwRandBg())
      tag.classList.add('text-dark')
      tag.classList.add('m-1')
      tag.innerText = tagText
      body.appendChild(tag)
    }

    const desc = document.createElement('div')
    desc.classList.add('card-desc')

    desc.innerHTML = item.description

    body.appendChild(desc)

    course_container.appendChild(credits)

    course_container.appendChild(h2)
    course_container.appendChild(body)
    course_container.appendChild(code)
    course_container.appendChild(year)
    container.appendChild(course_container)
  }
}
cardFlow()

function throwRandBg() {
  let strings = [
    'bg-info',
    'bg-success',
    'bg-secondary',
    'bg-primary',
    'bg-danger'
  ]
  return strings[Math.floor(Math.random() * strings.length)];
}