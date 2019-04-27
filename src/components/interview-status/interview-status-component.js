import React, { Component } from 'react';
import $ from 'jquery';
import sortable from 'jquery-ui/ui/widgets/sortable'
import './interview-status.scss'



class InterviewStatus extends Component {

    componentDidMount() {
        $(function() {
            $('ul[id^="sort"]').sortable({
                connectWith: ".sortable",
                receive: function (e, ui) {
                    var status_id = $(ui.item).parent(".sortable").data("status-id");
                    var task_id = $(ui.item).data("task-id");
                }
            });
        });
    }

    componentWillUnmount() {
        $(function() {
            $('ul[id^="sort"]').sortable('destroy');
        })
    }

    render() {
        return (
            <div className={"interview-status"}>
                <div class="task-board">
                    <div class="status-card">
                        
                        <div class="card-header">
                            <span class="card-header-text">Accepted</span>
                        </div>
                        <ul class="sortable ui-sortable" id="sort1" data-status-id="1">
                            <li class="text-row ui-sortable-handle" data-task-id="1">Candidate 1</li>
                            <li class="text-row ui-sortable-handle" data-task-id="3">Candidate 2</li>
                        </ul>

                    </div>
                    <div class="status-card">
                        
                        <div class="card-header">
                            <span class="card-header-text">Interviewe Pending</span>
                        </div>
                        <ul class="sortable ui-sortable" id="sort2" data-status-id="2">
                            <li class="text-row ui-sortable-handle" data-task-id="4">Candidate 3</li>
                            <li class="text-row ui-sortable-handle" data-task-id="5">Candidate 4</li>
                        </ul>

                    </div>
                    <div class="status-card">
                        
                        <div class="card-header">
                            <span class="card-header-text">Shortlisted</span>
                        </div>
                        <ul class="sortable ui-sortable" id="sort3" data-status-id="3">
                            <li class="text-row ui-sortable-handle" data-task-id="6">Candidate 5</li>
                            <li class="text-row ui-sortable-handle" data-task-id="7">Candidate 6</li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default InterviewStatus;
