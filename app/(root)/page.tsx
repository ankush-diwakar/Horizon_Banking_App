import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSidebar';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import RightSidebar from '@/components/RightSidebar';


const Home = () => {
  const loggedIn = { firstName: "ankush", lastName : "diwakar" , email : "work.ankush@gmail.com"}
  return (
    <section className='home'>
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently!"
          />
      
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.25}
        />
          </header>
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance:948.40} , { currentBalance:163.40}]}
      />
    </section>
  )
}

export default Home
