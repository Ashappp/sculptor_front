import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './Statistics.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekRange: [],
      dateArr: [],
      isDone: [],
      incomplete: [],
      dateNow: new Date(new Date(2019, 3, 19).setHours(0, 0, 0, 0)),
    };
  }

  componentDidMount() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNiOTk2M2QwNmI5NjFhMTAyNWQ2MDAwIiwiZW1haWwiOiJnb29nbGVAZ28uY29tIiwiaWF0IjoxNTU2MDg2NjgzfQ.bzMkR4T8--Ri_mn9XWtsvRnG14OtDu77nwjsH91D8ZA';

    const url = 'http://192.168.90.200:8000/api/goal/5cb9963d06b961a1025d6000';
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => data.data)
      .then(data => this.mapper(data));
  }

  mapper = data => {
    const date = [];
    const newArr = [];
    data.map(el => newArr.push(...el.goalTasks));
    newArr.map(el => date.push(...el.taskActiveDates));
    this.filterByDone(date);
    this.setState({
      weekRange: [...newArr],
      dateArr: [...date],
    });
  };

  filterByDone = arr => {
    const isDone = [];
    const incomplete = [];
    arr.forEach(el => (el.isDone ? isDone.push(el) : incomplete.push(el)));
    this.setState({
      isDone,
      incomplete,
    });
  };

  getDay = (date, count = 0) => {
    return new Date(
      ((date && new Date(date)) || new Date()).setHours(0, 0, 0, 0) +
        count * 3600 * 24 * 1000,
    ).getTime();
  };

  filtredDataByDay = arr => {
    const { dateNow } = this.state;
    const arrDate = [0, 0, 0, 0, 0, 0, 0];

    if (arr.length) {
      arr.map(el => {
        if (this.getDay(el.date) === this.getDay(dateNow)) {
          arrDate[0] += 1;
        } else if (this.getDay(el.date) === this.getDay(dateNow, 1)) {
          arrDate[1] += 1;
        } else if (this.getDay(el.date) === this.getDay(dateNow, 2)) {
          arrDate[2] += 1;
        } else if (this.getDay(el.date) === this.getDay(dateNow, 3)) {
          arrDate[3] += 1;
        } else if (this.getDay(el.date) === this.getDay(dateNow, 4)) {
          arrDate[4] += 1;
        } else if (this.getDay(el.date) === this.getDay(dateNow, 5)) {
          arrDate[5] += 1;
        } else if (this.getDay(el.date) === this.getDay(dateNow, 6)) {
          arrDate[6] += 1;
        } else if (this.getDay(el.date) === this.getDay(dateNow, 7)) {
          arrDate[7] += 1;
        }
        return null;
      });
    }

    return arrDate;
  };

  render() {
    const { weekRange, dateArr, isDone, incomplete, dateNow } = this.state;

    const options = {
      ticks: {
        suggestedMin: 1,
        suggestedMax: 30,
      },
      legend: {
        display: false,
        position: 'top',
        labels: {
          usePointStyle: true,
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                color: 'rgba(255,99,132,0.2)',
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
    const data = {
      dateNow,
      weekRange,
      dateArr,
      isDone,
      incomplete,
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Planned',
          data: this.filtredDataByDay(weekRange),
          backgroundColor: ['rgba(40,64,96)'],
          fill: 'none',
          borderColor: ['rgba(40,64,96,1)'],
          pointRadius: '3',
          pointHitRadius: '5',
          pointBackgroundColor: 'rgba(40,64,96,1)',
          pointBorderColor: 'rgba(40,64,96,1)',
        },
        {
          label: 'Done',
          data: this.filtredDataByDay(isDone),
          backgroundColor: ['rgba(252,132,44)'],
          borderColor: ['rgba(252,132,44,1)'],
          pointRadius: '3',
          fill: 'none',
          pointHitRadius: '5',
          pointBackgroundColor: 'rgba(252,132,44,1)',
          pointBorderColor: 'rgba(252,132,44,1)',
        },
      ],

      title: {
        display: true,
        text: 'Custom Chart Title',
      },
    };

    return (
      <div className="Statistics">
        <h1>HELLO</h1>
        <div className="Statick_text_wrapper">
          <span className="Statick_circle circle_planned" />
          <p className="Statistics_label planned">Planned</p>
          <span className="Statick_circle circle_done" />
          <p className="Statistics_label done">Done</p>
        </div>
        <Line data={data} options={options} className="line_chart" />
      </div>
    );
  }
}

export default Statistics;
