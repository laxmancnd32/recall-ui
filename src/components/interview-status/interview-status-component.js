import React, { Component } from 'react';
import $ from 'jquery';
import sortable from 'jquery-ui/ui/widgets/sortable'



class InterviewStatus extends Component {

    componentDidMount() {
        $(function() {
            $('ul[id^="sort"]').sortable({
                connectWith: ".sortable",
                receive: function (e, ui) {
                    var status_id = $(ui.item).parent(".sortable").data("status-id");
                    var task_id = $(ui.item).data("task-id");
                }
            }).disableSelection();
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
                            <li class="text-row ui-sortable-handle" data-task-id="1">Tutorial CRUD</li>
                            <li class="text-row ui-sortable-handle" data-task-id="3">Sorting and Change Ordering</li>
                        </ul>

                    </div>
                    <div class="status-card">
                        
                        <div class="card-header">
                            <span class="card-header-text">Interviewe Pending</span>
                        </div>
                        <ul class="sortable ui-sortable" id="sort2" data-status-id="2">
                            <li class="text-row ui-sortable-handle" data-task-id="4">Tutorial CRUD 2</li>
                            <li class="text-row ui-sortable-handle" data-task-id="5">Sorting and Change Ordering 2</li>
                        </ul>

                    </div>
                    <div class="status-card">
                        
                        <div class="card-header">
                            <span class="card-header-text">Shortlisted</span>
                        </div>
                        <ul class="sortable ui-sortable" id="sort3" data-status-id="3">
                            <li class="text-row ui-sortable-handle" data-task-id="6">Tutorial CRU34343D</li>
                            <li class="text-row ui-sortable-handle" data-task-id="7">Sorting and Cha343nge Ordering</li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default InterviewStatus;
