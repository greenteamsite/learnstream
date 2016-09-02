import delay from './delay';

const unit1 = {
  id: 1,
  title: 'HTTP - Overview',
  subtitle: 'Basic Architecture',
  pictureUrl: '/images/units/http.jpg',
  info: 'The Hypertext Transfer Protocol (HTTP) is an application-level protocol for distributed, collaborative, hypermedia information systems.',
  sections: [
    {
      title: 'Basic Architecture',
      subtitle: '111',
      pictureUrl: '/images/units/cgiarch.gif',
      info: 'The following diagram shows a very basic architecture of a web application and depicts where HTTP sits. The HTTP protocol is a request/response protocol based on the client/server based architecture where web browsers, robots and search engines, etc. act like HTTP clients, and the Web server acts as a server.',
      examples: [],
    },
    {
      title: 'GET Method',
      subtitle: '222',
      pictureUrl: '',
      info: 'A GET request retrieves data from a web server by specifying parameters in the URL portion of the request.',
      examples: [
        {
          description: 'The following example makes use of GET method to fetch hello.htm',
          code: `GET /hello.htm HTTP/1.1
                 User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
                 Host: www.tutorialspoint.com
                 Accept-Language: en-us
                 Accept-Encoding: gzip, deflate
                 Connection: Keep-Alive`,
        },
        {
          description: 'The server response against the above GET request will be as follows',
          code: `HTTP/1.1 200 OK
                 Date: Mon, 27 Jul 2009 12:28:53 GMT
                 Server: Apache/2.2.14 (Win32)
                 Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
                 ETag: "34aa387-d-1568eb00"
                 Vary: Authorization,Accept
                 Accept-Ranges: bytes
                 Content-Length: 88
                 Content-Type: text/html
                 Connection: Closed`,
        },
      ],
    },
  ],
  tests: [
    {
      question: { text: '', score: 0 },
      answers: [{ text: '', isCorrect: false }],
    },
  ],
};

const unit2 = {
  id: 1,
  title: 'SPA - Overview',
  subtitle: 'Single Page App',
  pictureUrl: '/images/units/http.jpg',
  info: 'The Hypertext Transfer Protocol (HTTP) is an application-level protocol for distributed, collaborative, hypermedia information systems.',
  sections: [
    {
      title: 'Basic Architecture',
      subtitle: '111',
      pictureUrl: '/images/units/cgiarch.gif',
      info: 'The following diagram shows a very basic architecture of a web application and depicts where HTTP sits. The HTTP protocol is a request/response protocol based on the client/server based architecture where web browsers, robots and search engines, etc. act like HTTP clients, and the Web server acts as a server.',
      examples: [],
    },
    {
      title: 'GET Method',
      subtitle: '222',
      pictureUrl: '',
      info: 'A GET request retrieves data from a web server by specifying parameters in the URL portion of the request.',
      examples: [
        {
          description: 'The following example makes use of GET method to fetch hello.htm',
          code: `GET /hello.htm HTTP/1.1
                 User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
                 Host: www.tutorialspoint.com
                 Accept-Language: en-us
                 Accept-Encoding: gzip, deflate
                 Connection: Keep-Alive`,
        },
        {
          description: 'The server response against the above GET request will be as follows',
          code: `HTTP/1.1 200 OK
                 Date: Mon, 27 Jul 2009 12:28:53 GMT
                 Server: Apache/2.2.14 (Win32)
                 Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
                 ETag: "34aa387-d-1568eb00"
                 Vary: Authorization,Accept
                 Accept-Ranges: bytes
                 Content-Length: 88
                 Content-Type: text/html
                 Connection: Closed`,
        },
      ],
    },
  ],
  tests: [
    {
      question: { text: '', score: 0 },
      answers: [{ text: '', isCorrect: false }],
    },
  ],
};

const moduleItem = {
  id: 1,
  title: 'Introduce Web Developing',
  roleIds: [1, 2, 3],
  units: [
    unit1,
    unit2,
  ],
  summaryTest: [
    {
      question: { text: '', score: 0 },
      answers: [{ text: '', isCorrect: false }],
    },
    {
      question: { text: '', score: 0 },
      answers: [{ text: '', isCorrect: false }],
    },
    {
      question: { text: '', score: 0 },
      answers: [{ text: '', isCorrect: false }],
    },
  ],
};

class ModuleApi {
  static get(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (id) {
          resolve(Object.assign({}, moduleItem));
        }
      }, delay);
    });
  }
}

export default ModuleApi;
