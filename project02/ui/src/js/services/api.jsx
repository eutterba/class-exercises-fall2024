const rootURL = "http://localhost:8000";

// React Task 1:
export async function fetchUser(username) {
    // replace this code with functionality that actually
    // queries that correct endpoint:

    const response = await fetch(`${rootURL}/api/users/${username}`);
    return await response.json();
}




// React Task 3:
export async function fetchCourses(options = {}) {
    let baseURL = `${rootURL}/api/courses?`;
    const data = [];

    if (options.department) {
        data.push(`department=${options.department}`);
        //baseURL += `department=${options.department}&`;
    }
    if (options.instructor) {
        data.push(`instructor=${options.instructor}`);
        //baseURL += `instructor=${options.instructor}&`;
    }
    if (options.hours) {
        data.push(`hours=${options.hours}`);
        //baseURL += `hours=${options.hours}&`;
    }
    if (options.title) {
        data.push(`title=${options.title}`);
        //baseURL += `title=${options.title}&`;
    }
    if (options.days) {
        data.push(`days=${options.days.join("")}`);
        //baseURL += `days=${options.days}&`;
    }
    if (options.classification.diversity_intensive) {
        data.push(`diversity_intensive=${options.classification.diversity_intensive}`);
        //baseURL += `diversity_intensive=${options.diversity_intensive}&`;
    }
    if (options.classification.diversity_intensive_r) {
        data.push(`diversity_intensive_r=${options.classification.diversity_intensive_r}`);
        //baseURL += `diversity_intensive_r=${options.diversity_intensive_r}&`;
    }
    if (options.classification.honors) {
        data.push(`honors=${options.classification.honors}`);
        //baseURL += `honors=${options.honors}&`;
    }
    if (options.classification.first_year_seminar) {
        data.push(`first_year_seminar=${options.classification.first_year_seminar}`);
        //baseURL += `first_year_seminar=${options.first_year_seminar}&`;
    }
    if (options.classification.arts) {
        data.push(`arts=${options.classification.arts}`);
        //baseURL += `arts=${options.arts}&`;
    }
    if (options.classification.service_learning) {
        data.push(`service_learning=${options.classification.service_learning}`);
        //baseURL += `service_learning=${options.service_learning}&`;
    }
    if (options.open) {
        data.push(`open=${options.open}`);
        //baseURL += `open=${options.open}&`;
    }

    if (data.length > 0) {
        baseURL += data.join('&');
    }
    if (data.length === 0) {
        baseURL = baseURL.slice(0, -1);
    }

    console.log(baseURL);
    const response = await fetch(baseURL);
    const courses = await response.json();
    console.log(courses);
    return courses;
}

export async function fetchSchedule(username) {
    const response = await fetch(`${rootURL}/api/schedules/${username}`);
    return await response.json();
}

export async function deleteCourseFromSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses/${crn}`;
    const response = await fetch(url, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export async function addCourseToSchedule(schedule, crn) {
    console.log(crn);
    const url = `${rootURL}/api/schedules/${schedule.id}/courses`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            crn: crn,
        }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}
