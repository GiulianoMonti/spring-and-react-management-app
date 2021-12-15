package g.react.controller;

import g.react.model.Employee;
import g.react.model.dto.PageDto;
import g.react.repository.EmployeeRepository;
import g.react.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    IEmployeeService iEmployeeService;
    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeController(IEmployeeService iEmployeeService, EmployeeRepository employeeRepository) {
        this.iEmployeeService = iEmployeeService;
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/page")
    ResponseEntity<?> getCategoriesPageable(@PageableDefault(sort = "id", direction = Sort.Direction.ASC, size = 6) Pageable pageable,
                                            @RequestParam(value = "page", defaultValue = "0") int page, HttpServletRequest request) {

        PageDto<Employee> r = iEmployeeService.getPageableCategory(pageable, request);
        return ResponseEntity.status(HttpStatus.OK).body(r);
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

}
