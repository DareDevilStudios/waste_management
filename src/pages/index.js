// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import axios from 'axios'
import Vehicle_data from 'src/views/dashboard/Vehicle_data'
import React from 'react'

const Dashboard = ({ data }) => {

  const [Vehicle, setVehicle] = React.useState('')
  const [responseData, setResponseData] = React.useState('')


  const handleChangeOfInputData = async (event) => {
    setVehicle(event.target.value)
    console.log("event.target.value", event.target.value)
    await axios.post(`/api/individual_vehicle_post`, {
      headers: {
        'accept': 'application/json',
        'X-CSRFToken': 'FtslYdAItKf5KltYFEgebZd5nghYSNRregvozx7Qe2xw3jNsOqSeIsCs7wgjcaSd'
      },
      // add the data to the body
      body: JSON.stringify({id : event.target.value})
    })
      // fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gps/add-vehicle/${event.target.value}`)
      .then(responseData => {
        console.log("responseData", responseData)
        setResponseData(responseData)
      })
      .catch(error => console.log("error", error))
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Vehicle_data data={data} Vehicle={Vehicle} handleChangeOfInputData={handleChangeOfInputData} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Trophy responseData={responseData} />
          
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

// getStaticProps
export async function getStaticProps() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/gps/add-vehicle`, {
      headers: {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your_token_here'
        }
      },
    });

    const data = response.data;

    console.log("data : " + JSON.stringify(data))

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
}


export default Dashboard
