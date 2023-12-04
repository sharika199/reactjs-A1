import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    userDetails: initialHistoryList,
    isTrue: false,
  }

  ChangeSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  deleteU = value => {
    const {userDetails} = this.state
    const filterUserD = userDetails.filter(each => each.id !== value)
    if (filterUserD.length === 0) {
      this.setState({userDetails: filterUserD, isTrue: true})
    } else {
      this.setState({userDetails: filterUserD})
    }
  }

  render() {
    const {userDetails, searchInput} = this.state
    const {initialHistoryList} = this.props
    let {isTrue} = this.state
    const searchResult = userDetails.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchResult.length === 0) {
      isTrue = true
    }
    return (
      <div className="app-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="time"
          />

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.ChangeSearch}
              className="search-ll"
              value={searchInput}
              placeholder="Search history"
            />
          </div>
        </div>

        <div>
          {!isTrue && (
            <ul className="g">
              {searchResult.map(each => (
                <li className="initial-list" key={each.id}>
                  <p className="Ptime">{each.timeAccessed}</p>
                  <div>
                    <img
                      src={each.logoUrl}
                      className="img-hh"
                      alt="domain logo"
                    />
                    <div>
                      <p>{each.title}</p>
                      <p>{each.domainUrl}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => this.deleteU(each.id)}
                    data-testid="delete"
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                      className="dd"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {isTrue && (
            <div>
              <div>
                <p>There is no history to show</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
