import {
  EmailOutlined,
  FlagOutlined,
  HomeOutlined,
  PersonOutline,
  PhoneOutlined
} from '@mui/icons-material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import { useWorkerContext } from '../../../Context';

import { FlexView, Text } from 'Components';

type Props = {
  open: boolean;
  // handleOk?: (data: { name: string; workerId: string }) => void;
  handleClose: () => void;
};

export default function WorkerRegistModal(props: Props) {
  const { open, handleClose } = props;
  const [date, setDate] = useState<Date | null>();
  const [name, setName] = useState('');
  const [workerId, setWorkerId] = useState('');
  const { addWorker } = useWorkerContext();

  const handleChange = (newValue: Date | null) => {
    setDate(newValue);
  };

  const onOk = () => {
    addWorker({
      workerName: name,
      id: workerId,
      completed: false,
      hasAb: false,
      first: '',
      second: '',
      third: '',
      testDate: '',
      retest: '',
      phone: ''
    });
    setName('');
    setWorkerId('');
    handleClose();
  };

  return (
    <Dialog
      aria-describedby="alert-dialog-description"
      aria-labelledby="alert-dialog-title"
      open={open}
      fullWidth
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">직원등록</DialogTitle>
      <DialogContent>
        <Stack rowGap={2}>
          <Text bold>개인정보</Text>
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline />
                </InputAdornment>
              )
            }}
            label="이름"
            value={name}
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              )
            }}
            label="이메일"
            variant="outlined"
          />
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlined />
                </InputAdornment>
              )
            }}
            label="휴대전화"
            variant="outlined"
          />
          {/* <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeOutlined />
                </InputAdornment>
              )
            }}
            label="집주소"
            variant="outlined"
          /> */}
        </Stack>
        <Stack rowGap={2} sx={{ mt: 2 }}>
          <Text bold>인사정보</Text>
          <FlexView row>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlagOutlined />
                  </InputAdornment>
                )
              }}
              label="사번"
              value={workerId}
              variant="outlined"
              onChange={(e) => {
                setWorkerId(e.target.value);
              }}
            />
            <FormControl sx={{ flex: 1 }}>
              <InputLabel id="demo-simple-select-label1">팀/부서</InputLabel>
              <Select
                label="직책"
                labelId="demo-simple-select-label1"
                // value={team}
                // autoWidth
                // onChange={onTeamChange}
              >
                <MenuItem value="1">사업팀</MenuItem>
                <MenuItem value="2">영업팀</MenuItem>
                <MenuItem value="3">생산팀</MenuItem>
                <MenuItem value="3">프로덕트팀</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <InputLabel id="demo-simple-select-label2">직급</InputLabel>
              <Select
                label="직급"
                labelId="demo-simple-select-label2"
                // value={team}
                // autoWidth
                // onChange={onTeamChange}
              >
                <MenuItem value="1">대표</MenuItem>
                <MenuItem value="2">전무</MenuItem>
                <MenuItem value="3">상무</MenuItem>
                <MenuItem value="4">이사</MenuItem>
                <MenuItem value="5">부장</MenuItem>
                <MenuItem value="6">과장</MenuItem>
                <MenuItem value="7">대리</MenuItem>
                <MenuItem value="8">사원</MenuItem>
              </Select>
            </FormControl>
          </FlexView>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="yyyy-MM-dd"
              label="입사일"
              renderInput={(params) => <TextField {...params} />}
              value={date}
              onChange={handleChange}
            />
          </LocalizationProvider>
        </Stack>
        {/* <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button variant="contained" autoFocus onClick={onOk}>
          등록
        </Button>
      </DialogActions>
    </Dialog>
  );
}
