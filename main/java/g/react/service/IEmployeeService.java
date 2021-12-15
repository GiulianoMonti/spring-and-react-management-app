package g.react.service;

import g.react.model.Employee;
import g.react.model.dto.PageDto;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletRequest;

public interface IEmployeeService {
    PageDto<Employee> getPageableCategory(Pageable pageable, HttpServletRequest request);

}
