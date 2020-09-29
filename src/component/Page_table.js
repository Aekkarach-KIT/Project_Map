import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Zip Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2)
  }
]

function createData (name, code, population, size) {
  const density = population / size
  return { name, code, population, size, density }
}

const rows = [
  createData('กะรน', '83100', 8121, 20.0),
  createData('ฉลอง', '83130', 26957, 30.0),
  createData('ตลาดเหนือ', '83000', 22300, 8.31),
  createData('ตลาดใหญ่', '83000', 57008, 3.69),
  createData('รัษฎา', '83000', 48740, 35.0),
  createData('ราไวย์', '83130', 18768, 23.0),
  createData('วิชิต', '83000', 52233, 56.0),
  createData('กมลา', '83150', 7106, 18.84),
  createData('กะทู้', '83120', 30797, 31.794),
  createData('ป่าตอง', '83150', 21294, 16.4),
  createData('ป่าคลอก', '83110', 21358, 51.5),
  createData('ศรีสุนทร', '83110', 25746, 45.1),
  createData('สาคู', '83110', 6813, 10.7),
  createData('เชิงทะเล', '83110', 6986, 37.1),
  createData('เทพกษัตรี', '83110', 9093, 78.4),
  createData('ไม้ขาว', '83110', 13433, 29.2),
  createData('เกาะแก้ว', '83000', 16347, 48.0)
]

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
})

export default function StickyHeadTable () {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className='bgco'>
      <NaBar />
      <Paper className='mt-7'>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <Footer />
    </div>
  )
}
