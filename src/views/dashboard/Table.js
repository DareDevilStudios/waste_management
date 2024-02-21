// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    "type": "GEOFENCE_BREACH",
    "vehicle": {
      "id": 2,
      "name": "City Route",
      "model": "Tata 912 LPK Tipperr",
      "registration_number": "KL 05 AA 8009",
      "actual_route": {
        "a": [
          12.913,
          77.614
        ],
        "b": [
          13.913,
          78.614
        ],
        "c": [
          14.91,
          79.614
        ],
        "d": [
          14.11,
          79.3143
        ],
        "e": [
          14.913,
          79.414
        ]
      },
      "organization": 1
    },
    "geofence": {
      "id": 1,
      "name": "milk farm route",
      "geometry": {
        "east": 77.61538987770996,
        "west": 77.61006692543947,
        "north": 12.915682417744584,
        "south": 12.911075841324305
      },
      "Vehicle_id": 2
    },
    "message": "Vehicle is outside the geofence",
    "action": null
  },
  {
    "type": "GEOFENCE_BREACH",
    "vehicle": {
      "id": 4,
      "name": "GreenClean 2000",
      "model": "GarboMaster 5000",
      "registration_number": "WC-1234",
      "actual_route": {},
      "organization": 1
    },
    "geofence": {
      "id": 2,
      "name": "milk society route",
      "geometry": {
        "east": 77.61204528085936,
        "west": 77.62440489999999,
        "north": 12.9234621,
        "south": 12.9334621
      },
      "Vehicle_id": 4
    },
    "message": "Vehicle is outside the geofence",
    "action": null
  },
  {
    "type": "GEOFENCE_BREACH",
    "vehicle": {
      "id": 4,
      "name": "GreenClean 2000",
      "model": "GarboMaster 5000",
      "registration_number": "WC-1234",
      "actual_route": {},
      "organization": 1
    },
    "geofence": {
      "id": 2,
      "name": "milk society route",
      "geometry": {
        "east": 77.61204528085936,
        "west": 77.62440489999999,
        "north": 12.9234621,
        "south": 12.9334621
      },
      "Vehicle_id": 4
    },
    "message": "Vehicle is outside the geofence",
    "action": null
  },
  {
    "type": "GEOFENCE_BREACH",
    "vehicle": {
      "id": 2,
      "name": "City Route",
      "model": "Tata 912 LPK Tipperr",
      "registration_number": "KL 05 AA 8009",
      "actual_route": {
        "a": [
          12.913,
          77.614
        ],
        "b": [
          13.913,
          78.614
        ],
        "c": [
          14.91,
          79.614
        ],
        "d": [
          14.11,
          79.3143
        ],
        "e": [
          14.913,
          79.414
        ]
      },
      "organization": 1
    },
    "geofence": {
      "id": 1,
      "name": "milk farm route",
      "geometry": {
        "east": 77.61538987770996,
        "west": 77.61006692543947,
        "north": 12.915682417744584,
        "south": 12.911075841324305
      },
      "Vehicle_id": 2
    },
    "message": "Vehicle is outside the geofence",
    "action": null
  },
  {
    "type": "GEOFENCE_BREACH",
    "vehicle": {
      "id": 2,
      "name": "City Route",
      "model": "Tata 912 LPK Tipperr",
      "registration_number": "KL 05 AA 8009",
      "actual_route": {
        "a": [
          12.913,
          77.614
        ],
        "b": [
          13.913,
          78.614
        ],
        "c": [
          14.91,
          79.614
        ],
        "d": [
          14.11,
          79.3143
        ],
        "e": [
          14.913,
          79.414
        ]
      },
      "organization": 1
    },
    "geofence": {
      "id": 1,
      "name": "milk farm route",
      "geometry": {
        "east": 77.61538987770996,
        "west": 77.61006692543947,
        "north": 12.915682417744584,
        "south": 12.911075841324305
      },
      "Vehicle_id": 2
    },
    "message": "Vehicle is outside the geofence",
    "action": null
  },
  {
    "type": "GEOFENCE_BREACH",
    "vehicle": {
      "id": 2,
      "name": "City Route",
      "model": "Tata 912 LPK Tipperr",
      "registration_number": "KL 05 AA 8009",
      "actual_route": {
        "a": [
          12.913,
          77.614
        ],
        "b": [
          13.913,
          78.614
        ],
        "c": [
          14.91,
          79.614
        ],
        "d": [
          14.11,
          79.3143
        ],
        "e": [
          14.913,
          79.414
        ]
      },
      "organization": 1
    },
    "geofence": {
      "id": 1,
      "name": "milk farm route",
      "geometry": {
        "east": 77.61538987770996,
        "west": 77.61006692543947,
        "north": 12.915682417744584,
        "south": 12.911075841324305
      },
      "Vehicle_id": 2
    },
    "message": "Vehicle is outside the geofence",
    "action": null
  },
  {
    "type": "GEOFENCE_BREACH",
    "vehicle": {
      "id": 2,
      "name": "City Route",
      "model": "Tata 912 LPK Tipperr",
      "registration_number": "KL 05 AA 8009",
      "actual_route": {
        "a": [
          12.913,
          77.614
        ],
        "b": [
          13.913,
          78.614
        ],
        "c": [
          14.91,
          79.614
        ],
        "d": [
          14.11,
          79.3143
        ],
        "e": [
          14.913,
          79.414
        ]
      },
      "organization": 1
    },
    "geofence": {
      "id": 1,
      "name": "milk farm route",
      "geometry": {
        "east": 77.61538987770996,
        "west": 77.61006692543947,
        "north": 12.915682417744584,
        "south": 12.911075841324305
      },
      "Vehicle_id": 2
    },
    "message": "Vehicle is outside the geofence",
    "action": null
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>message</TableCell>
              {/* <TableCell>Salary</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.vehicle.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.vehicle.id}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.vehicle.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.message}</Typography>
                  </Box>
                </TableCell>
                {/* <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell> */}
                {/* <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
